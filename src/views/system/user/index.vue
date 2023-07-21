<template>
    <div class="default-main ba-table-box">
        <el-alert class="ba-table-alert" v-if="baTable.table.remark" :title="baTable.table.remark" type="info" show-icon />

        <!-- 表格顶部菜单 -->
        <TableHeader
            :buttons="['refresh', 'add', 'edit', 'delete', 'comSearch', 'quickSearch', 'columnDisplay']"
            :quick-search-placeholder="t('Quick search placeholder', { fields: t('system.user.username') + '/' + t('system.user.nickname') })"
        />

        <!-- 表格 -->
        <!-- 要使用`el-table`组件原有的属性，直接加在Table标签上即可 -->
        <Table />

        <!-- 表单 -->
        <PopupForm />
    </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import baTableClass from '/@/utils/baTable';
import PopupForm from './popupForm.vue';
import Table from '/@/components/table/index.vue';
import TableHeader from '/@/components/table/header/index.vue';
import { defaultOptButtons } from '/@/components/table';
import { baTableApi } from '/@/api/common';
import { useUserInfo } from '/@/stores/userInfo';
import { useI18n } from 'vue-i18n';

defineOptions({
    name: 'system/user',
});

const { t } = useI18n();
const userInfo = useUserInfo();

const optButtons = defaultOptButtons(['edit', 'delete']);
optButtons[1].display = (row) => {
    return row.id != userInfo.id;
};

const baTable = new baTableClass(
    new baTableApi('/system/user/'),
    {
        column: [
            { type: 'selection', align: 'center', operator: false },
            { label: t('Id'), prop: 'id', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query'), width: 70 },
            { label: t('system.user.username'), prop: 'username', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            { label: t('system.user.nickname'), prop: 'nickname', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            { label: t('system.user.grouping'), prop: 'group_name_arr', align: 'center', operator: false, render: 'tags' },
            { label: t('system.user.head portrait'), prop: 'avatar', align: 'center', render: 'image', operator: false },
            { label: t('system.user.mailbox'), prop: 'email', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            { label: t('system.user.mobile'), prop: 'mobile', align: 'center', operator: 'LIKE', operatorPlaceholder: t('Fuzzy query') },
            {
                label: t('system.user.Last login'),
                prop: 'last_login_time',
                align: 'center',
                render: 'datetime',
                sortable: 'custom',
                operator: 'RANGE',
                width: 160,
            },
            { label: t('Create time'), prop: 'create_time', align: 'center', render: 'datetime', sortable: 'custom', operator: 'RANGE', width: 160 },
            {
                label: t('State'),
                prop: 'status',
                align: 'center',
                render: 'tag',
                custom: { '0': 'danger', '1': 'success' },
                replaceValue: { '0': t('Disable'), '1': t('Enable') },
            },
            {
                label: t('Operate'),
                align: 'center',
                width: '100',
                render: 'buttons',
                buttons: optButtons,
                operator: false,
            },
        ],
        dblClickNotEditColumn: [undefined, 'status'],
    },
    {
        defaultItems: {
            status: '1',
        },
    }
);

provide('baTable', baTable);

baTable.mount();
baTable.getIndex();
</script>

<style scoped lang="scss"></style>
../../../stores/userInfo
