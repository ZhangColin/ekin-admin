<template>
    <component :is="config.layout.layoutMode"></component>
</template>

<script setup lang="ts">
import { useConfig } from '/@/stores/config';
import { useNavTabs } from '/@/stores/navTabs';
import { useSiteConfig } from '/@/stores/siteConfig';
import { useUserInfo } from '/@/stores/userInfo';
import { useRoute } from 'vue-router';
import Default from '/@/layouts/container/default.vue';
import Classic from '/@/layouts/container/classic.vue';
import Streamline from '/@/layouts/container/streamline.vue';
import Double from '/@/layouts/container/double.vue';
import { onMounted, onBeforeMount } from 'vue';
import { Session } from '/@/utils/storage';
import { getConfig } from '/@/api/index';
import { handleRoute, getFirstRoute, routePush } from '/@/utils/router';
import router from '/@/router/index';
import { baseRoute } from '/@/router/static';
import { useEventListener } from '@vueuse/core';
import { BEFORE_RESIZE_LAYOUT } from '/@/stores/constant/cacheKey';
import { isEmpty } from 'lodash-es';

defineOptions({
    components: { Default, Classic, Streamline, Double },
});

const navTabs = useNavTabs();
const config = useConfig();
const route = useRoute();
const siteConfig = useSiteConfig();
const userInfo = useUserInfo();

onMounted(() => {
    if (!userInfo.token) return router.push({ name: 'login' });

    init();
    onSetNavTabsMinWidth();
    useEventListener(window, 'resize', onSetNavTabsMinWidth);
});
onBeforeMount(() => {
    onAdaptiveLayout();
    useEventListener(window, 'resize', onAdaptiveLayout);
});

const init = () => {
    /**
     * 初始化请求，获取站点配置，动态路由等信息
     */
     getConfig().then((res) => {
        siteConfig.dataFill(res.data.siteConfig);
        userInfo.dataFill(res.data.userInfo);

        if (res.data.menus) {
            handleRoute(res.data.menus);

            // 预跳转到上次路径
            if (route.params.to) {
                const lastRoute = JSON.parse(route.params.to as string);
                if (lastRoute.path != baseRoute.path) {
                    let query = !isEmpty(lastRoute.query) ? lastRoute.query : {};
                    routePush({ path: lastRoute.path, query: query });
                    return;
                }
            }

            // 跳转到第一个菜单
            let firstRoute = getFirstRoute(navTabs.state.tabsViewRoutes);
            if (firstRoute) routePush(firstRoute.path);
        }
    });
};

const onAdaptiveLayout = () => {
    let defaultBeforeResizeLayout = {
        layoutMode: config.layout.layoutMode,
        menuCollapse: config.layout.menuCollapse,
    };
    let beforeResizeLayout = Session.get(BEFORE_RESIZE_LAYOUT);
    if (!beforeResizeLayout) Session.set(BEFORE_RESIZE_LAYOUT, defaultBeforeResizeLayout);

    const clientWidth = document.body.clientWidth;
    if (clientWidth < 1024) {
        config.setLayout('menuCollapse', true);
        config.setLayout('shrink', true);
        config.setLayoutMode('Classic');
    } else {
        let beforeResizeLayoutTemp = beforeResizeLayout || defaultBeforeResizeLayout;

        config.setLayout('menuCollapse', beforeResizeLayoutTemp.menuCollapse);
        config.setLayout('shrink', false);
        config.setLayoutMode(beforeResizeLayoutTemp.layoutMode);
    }
};

// 在实例挂载后为navTabs设置一个min-width，防止宽度改变时闪现滚动条
const onSetNavTabsMinWidth = () => {
    const navTabs = document.querySelector('.nav-tabs') as HTMLElement;
    if (!navTabs) {
        return;
    }
    const navBar = document.querySelector('.nav-bar') as HTMLElement;
    const navMenus = document.querySelector('.nav-menus') as HTMLElement;
    const minWidth = navBar.offsetWidth - (navMenus.offsetWidth + 20);
    navTabs.style.width = minWidth.toString() + 'px';
};
</script>
../stores/userInfo
