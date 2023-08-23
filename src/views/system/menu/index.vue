<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader :buttons="['refresh', 'add', 'edit', 'delete', 'unfold', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('system.menu.title') })" />
        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table ref="tableRef" :pagination="false" />

        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, provide } from 'vue';
import PopupForm from './popupForm.vue';
import Table from '/@/components/table/index.vue';
import TableHeader from '/@/components/table/header/index.vue';
import { defaultOptButtons } from '/@/components/table';
import { useI18n } from 'vue-i18n';
import { baTableApi } from '/@/api/common';
import baTableClass from '/@/utils/baTable';

defineOptions({
    name: 'system/menu',
});

const { t } = useI18n();
const tableRef = ref();
const baTable = new baTableClass(
    new baTableApi('/api/system/menus/'),
    {
        expandAll: false,
        dblClickNotEditColumn: ['keepalive', 'status'],
        column: [
            { type: 'selection', align: 'center' },
            { label: t('system.menu.title'), prop: 'title', align: 'left'},
            { label: t('system.menu.Icon'), prop: 'icon', align: 'center', width: '60', render: 'icon', default: 'fa fa-circle-o' },
            { label: t('system.menu.name'), prop: 'name', align: 'center', showOverflowTooltip: true },
            {
                label: t('system.menu.type'),
                prop: 'type',
                align: 'center',
                render: 'tag',
                custom: { menu: 'danger', menu_dir: 'success', button: 'info' },
                replaceValue: { menu: t('system.menu.type menu'), menu_dir: t('system.menu.type menu_dir'), operate: t('system.menu.type button') },
            },
            { label: t('system.menu.cache'), prop: 'keepalive', align: 'center', width: '80', render: 'switch' },
            { label: t('State'), prop: 'status', align: 'center', width: '80', render: 'switch' },
            // {
            //     label: t('system.menu.cache'), prop: 'keepalive', align: 'center',
            //     render: 'tag',
            //     custom: { false: 'danger', true: 'success' },
            //     replaceValue: { false: t('Disable'), true: t('Enable') }
            // },
            // {
            //     label: t('State'),
            //     prop: 'status',
            //     align: 'center',
            //     render: 'tag',
            //     custom: { '0': 'danger', '1': 'success' },
            //     replaceValue: { '0': t('Disable'), '1': t('Enable') },
            // },
            {
                label: t('Operate'),
                align: 'center',
                width: '130',
                render: 'buttons',
                buttons: defaultOptButtons(),
            },
        ],
        dragSortLimitField: 'parentId',
    },
    {
        defaultItems: {
            type: 'menu',
            menuType: 'tab',
            keepalive: 0,
            status: '1',
            icon: 'fa fa-circle-o',
        },
    },
    {
        getIndex: () => {
            baTable.table.expandAll = baTable.table.filter?.quickSearch ? true : false;
        },
        // 获得编辑数据后
        requestEdit: () => {
            if (baTable.form.items && !baTable.form.items.icon) baTable.form.items.icon = 'fa fa-circle-o';
        },
    }
);

provide('baTable', baTable);

onMounted(() => {
    baTable.table.ref = tableRef.value;
    baTable.mount();
    baTable.getIndex()?.then(() => {
        baTable.dragSort();
    });
});
</script>

<style scoped lang="scss"></style>
