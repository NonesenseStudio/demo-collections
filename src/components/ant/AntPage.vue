<template>
  <main class="ant-page">
    <div class="ant-page-header">
      <div class="ant-page-header-unit" v-if="unit">单位：{{ unit }}</div>
    </div>
    <div class="ant-page-content" ref="contentRef">
      <div class="ant-page-content-table">
        <a-table
          :columns="columns"
          :data-source="tableData"
          :scroll="{ y: scrollY }"
          :pagination="false"
          bordered
        ></a-table>
        <a-pagination
          class="a-pagination"
          v-model:current="pagination.current"
          :total="dataSource.length"
        />
      </div>
    </div>
    <div class="ant-page-footer"></div>
  </main>
</template>

<script setup lang="ts">
const props = defineProps<{
  columns: any;
  dataSource: any[];
  pagination?: boolean;
  unit?: string;
}>();

const contentRef = ref();
const scrollY = ref();
const pagination = reactive({
  current: 1,
});

const tableData = computed(() => {
  return props.dataSource.slice(
    (pagination.current - 1) * 10,
    pagination.current * 10,
  );
});

onMounted(() => {
  nextTick(() => {
    scrollY.value = contentRef.value.clientHeight - 60 - 60 - 50;
  });
});
</script>

<style scoped lang="less">
.ant-page {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  flex-direction: column;

  &-header {
    height: 60px;
    background-color: #fff;
    display: flex;

    &-unit {
      height: 60px;
      line-height: 60px;

      font-size: 14px;
      color: #999;
    }
  }

  &-content {
    flex: 1;
    background-color: #fff;

    &-table {
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .a-pagination {
        height: 40px;
        margin-top: 10px;
        text-align: right;
      }
    }
  }

  &-footer {
    background-color: #fff;
  }
}
</style>
