<script setup lang="ts">
import { ElRow, ElCol, ElSkeleton, ElCard, ElDivider } from 'element-plus';
import { useI18n } from '@/hooks/web/useI18n';
import { ref, reactive } from 'vue';
import { CountTo } from '@/components/CountTo';
import type { WorkplaceTotal } from '@/api/dashboard/workplace/types';

const loading = ref(false);

// 获取统计数
let totalSate = reactive<WorkplaceTotal>({
  project: 100,
  access: 1000,
  todo: 20,
});

const { t } = useI18n();
</script>

<template>
  <div>
    <ElCard shadow="never">
      <ElSkeleton :loading="loading" animated>
        <ElRow :gutter="20" justify="space-between">
          <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="flex items-center">
              <img
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
                alt=""
                class="w-70px h-70px rounded-[50%] mr-20px"
              />
              <div>
                <div class="text-20px text-700">
                  {{ t('workplace.goodMorning') }}，Colin，{{
                    t('workplace.happyDay')
                  }}
                </div>
                <div class="mt-10px text-14px text-gray-500">
                  {{ t('workplace.toady') }}，20℃ - 32℃！
                </div>
              </div>
            </div>
          </ElCol>
          <ElCol :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
            <div class="flex h-70px items-center justify-end <sm:mt-20px">
              <div class="px-8px text-right">
                <div class="text-14px text-gray-400 mb-20px">
                  {{ t('workplace.project') }}
                </div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.project"
                  :duration="2600"
                />
              </div>
              <ElDivider direction="vertical" />
              <div class="px-8px text-right">
                <div class="text-14px text-gray-400 mb-20px">
                  {{ t('workplace.toDo') }}
                </div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.todo"
                  :duration="2600"
                />
              </div>
              <ElDivider direction="vertical" border-style="dashed" />
              <div class="px-8px text-right">
                <div class="text-14px text-gray-400 mb-20px">
                  {{ t('workplace.access') }}
                </div>
                <CountTo
                  class="text-20px"
                  :start-val="0"
                  :end-val="totalSate.access"
                  :duration="2600"
                />
              </div>
            </div>
          </ElCol>
        </ElRow>
      </ElSkeleton>
    </ElCard>
  </div>
</template>
