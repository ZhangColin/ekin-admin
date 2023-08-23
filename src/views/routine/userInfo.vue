<template>
    <div class="default-main">
        <el-row :gutter="30">
            <el-col class="lg-mb-20" :xs="24" :sm="24" :md="24" :lg="10">
                <div class="user-info">
                    <el-upload
                        class="avatar-uploader"
                        action=""
                        :show-file-list="false"
                        @change="onAvatarBeforeUpload"
                        :auto-upload="false"
                        accept="image/gif, image/jpg, image/jpeg, image/bmp, image/png, image/webp"
                    >
                        <el-image :src="state.userInfo.avatar" class="avatar">
                            <template #error>
                                <div class="image-slot">
                                    <Icon size="30" color="#c0c4cc" name="el-icon-Picture" />
                                </div>
                            </template>
                        </el-image>
                    </el-upload>
                    <div class="user-info-base">
                        <div class="user-nickname">{{ state.userInfo.nickname }}</div>
                        <div class="user-other">
                            <div>{{ t('routine.userInfo.Last logged in on') }} {{ state.userInfo.last_login_time }}</div>
                        </div>
                    </div>
                    <div class="user-info-form">
                        <el-form
                            @keyup.enter="onSubmit()"
                            :key="state.formKey"
                            label-position="top"
                            :rules="rules"
                            ref="formRef"
                            :model="state.userInfo"
                        >
                            <el-form-item :label="t('routine.userInfo.user name')">
                                <el-input disabled v-model="state.userInfo.username"></el-input>
                            </el-form-item>
                            <el-form-item :label="t('routine.userInfo.User nickname')" prop="nickname">
                                <el-input :placeholder="t('routine.userInfo.Please enter a nickname')" v-model="state.userInfo.nickname"></el-input>
                            </el-form-item>
                            <el-form-item :label="t('routine.userInfo.e-mail address')" prop="email">
                                <el-input
                                    :placeholder="t('Please input field', { field: t('routine.userInfo.e-mail address') })"
                                    v-model="state.userInfo.email"
                                ></el-input>
                            </el-form-item>
                            <el-form-item :label="t('routine.userInfo.phone number')" prop="mobile">
                                <el-input
                                    :placeholder="t('Please input field', { field: t('routine.userInfo.phone number') })"
                                    v-model="state.userInfo.mobile"
                                ></el-input>
                            </el-form-item>
                            <el-form-item :label="t('routine.userInfo.autograph')" prop="motto">
                                <el-input
                                    @keyup.enter.stop=""
                                    @keyup.ctrl.enter="onSubmit()"
                                    :placeholder="t('routine.userInfo.This guy is lazy and doesn write anything')"
                                    type="textarea"
                                    v-model="state.userInfo.motto"
                                ></el-input>
                            </el-form-item>
                            <el-form-item :label="t('routine.userInfo.New password')" prop="password">
                                <el-input
                                    type="password"
                                    :placeholder="t('routine.userInfo.Please leave blank if not modified')"
                                    v-model="state.userInfo.password"
                                ></el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" :loading="state.buttonLoading" @click="onSubmit()">
                                    {{ t('routine.userInfo.Save changes') }}
                                </el-button>
                                <el-button @click="onResetForm(formRef)">{{ t('Reset') }}</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
            <el-col v-loading="state.logLoading" :xs="24" :sm="24" :md="24" :lg="12">
                <el-card :header="t('routine.userInfo.Operation log')" shadow="never">
                    <el-timeline>
                        <el-timeline-item v-for="(item, idx) in state.log" :key="idx" size="large" :timestamp="timeFormat(item.create_time)">
                            {{ item.title }}
                        </el-timeline-item>
                    </el-timeline>
                    <el-pagination
                        :currentPage="state.logCurrentPage"
                        :page-size="state.logPageSize"
                        :page-sizes="[12, 22, 52, 100]"
                        background
                        layout="prev, next, jumper"
                        :total="state.logTotal"
                        @size-change="onLogSizeChange"
                        @current-change="onLogCurrentChange"
                    ></el-pagination>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { index, log, postData } from '/@/api/routine/UserInfo'
import { FormInstance, FormItemRule } from 'element-plus'
import { onResetForm, timeFormat } from '/@/utils/common'
import { uuid } from '../../../utils/random'
import { buildValidatorData } from '/@/utils/validate'
import { fileUpload } from '/@/api/common'
import { useUserInfo } from '/@/stores/userInfo'

defineOptions({
    name: 'routine/userInfo',
})

const { t } = useI18n()
const formRef = ref<FormInstance>()

const userInfoStore = useUserInfo()

const state: {
    userInfo: AnyObj
    formKey: string
    buttonLoading: boolean
    log: {
        title: string
        create_time: string
        url: string
    }[]
    logFilter: AnyObj
    logCurrentPage: number
    logPageSize: number
    logTotal: number
    logLoading: boolean
} = reactive({
    userInfo: {},
    formKey: uuid(),
    buttonLoading: false,
    log: [],
    logFilter: {
        limit: 12,
    },
    logCurrentPage: 1,
    logPageSize: 12,
    logTotal: 100,
    logLoading: true,
})

index().then((res) => {
    state.userInfo = res.data.info
    // 重新渲染表单以记录初始值
    state.formKey = uuid()

    // 管理员日志加载，加筛选防止超管读取到其他管理员的日志记录
    state.logFilter.search = [
        {
            field: 'admin_id',
            val: res.data.info.id,
            operator: '=',
        },
    ]
    getLog()
})

const getLog = () => {
    log(state.logFilter)
        .then((res) => {
            state.log = res.data.list
            state.logTotal = res.data.total
            state.logLoading = false
        })
        .catch(() => {
            state.logLoading = false
        })
}

const onLogSizeChange = (limit: number) => {
    state.logPageSize = limit
    state.logFilter.limit = limit
    getLog()
}

const onLogCurrentChange = (page: number) => {
    state.logCurrentPage = page
    state.logFilter.page = page
    getLog()
}

const rules: Partial<Record<string, FormItemRule[]>> = reactive({
    nickname: [buildValidatorData({ name: 'required', title: t('routine.userInfo.User nickname') })],
    email: [buildValidatorData({ name: 'email', title: t('routine.userInfo.e-mail address') })],
    mobile: [buildValidatorData({ name: 'mobile', message: t('Please enter the correct field', { field: t('routine.userInfo.phone number') }) })],
    password: [buildValidatorData({ name: 'password' })],
})

const onAvatarBeforeUpload = (file: any) => {
    let fd = new FormData()
    fd.append('file', file.raw)
    fileUpload(fd).then((res) => {
        if (res.code == 1) {
            postData({
                id: state.userInfo.id,
                avatar: res.data.file.url,
            }).then(() => {
                userInfoStore.dataFill({ ...userInfoStore.$state, avatar: res.data.file.full_url })
                state.userInfo.avatar = res.data.file.full_url
            })
        }
    })
}

const onSubmit = () => {
    if (!formRef.value) return
    formRef.value.validate((valid) => {
        if (valid) {
            let data = { ...state.userInfo }
            delete data.last_login_time
            delete data.username
            delete data.avatar
            state.buttonLoading = true
            postData(data)
                .then(() => {
                    userInfoStore.dataFill({ ...userInfoStore.$state, nickname: state.userInfo.nickname })
                    state.buttonLoading = false
                })
                .catch(() => {
                    state.buttonLoading = false
                })
        }
    })
}
</script>

<style scoped lang="scss">
.user-info {
    background-color: var(--ba-bg-color-overlay);
    border-radius: var(--el-border-radius-base);
    border-top: 3px solid #409eff;
    .avatar-uploader {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 60px auto 10px auto;
        border-radius: 50%;
        box-shadow: var(--el-box-shadow-light);
        border: 1px dashed var(--el-border-color);
        cursor: pointer;
        overflow: hidden;
        width: 110px;
        height: 110px;
    }
    .avatar-uploader:hover {
        border-color: var(--el-color-primary);
    }
    .avatar {
        width: 110px;
        height: 110px;
        display: block;
    }
    .image-slot {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
    .user-info-base {
        .user-nickname {
            font-size: 22px;
            color: var(--el-text-color-primary);
            text-align: center;
            padding: 8px 0;
        }
        .user-other {
            color: var(--el-text-color-regular);
            font-size: 14px;
            text-align: center;
            line-height: 20px;
        }
    }
    .user-info-form {
        padding: 30px;
    }
}
.el-card :deep(.el-timeline-item__icon) {
    font-size: 10px;
}
@media screen and (max-width: 1200px) {
    .lg-mb-20 {
        margin-bottom: 20px;
    }
}
</style>
