<template>
    <el-main>
        <!-- 搜索------------------- -->
        <el-card>
            <el-form :inline="true" :model="form" class="demo-form-inline">
                <el-form-item label="类目名称">
                    <el-input size="small" v-model="form.categoryName" placeholder="请输入类目名称"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" size="small" @click="search">搜索</el-button>
                    <el-button type="primary" size="small" @click="reset">重置</el-button>
                </el-form-item>
            </el-form>
        </el-card>
        <br />
        <el-card>
            <div style="float:right">
                <el-button type="info" size="small" @click="dialog('add')">新增</el-button>
            </div>
            <!-- 表格开始 ------------------------->
            <el-table :data="tableData" highlight-current-row v-loading="loading">
                <el-table-column label="序号" width="60" align="center">
                    <template #default="scope">
                        <span>{{(currentPage * pageSize - pageSize) + (scope.$index + 1)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="categoryName" label="类目名称" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column prop="remarks" label="备注" :show-overflow-tooltip="true"></el-table-column>
                <el-table-column label="操作" width="200">
                    <template #default="scope">
                        <el-button type="text" size="small" @click="dialog('check',scope.row)">查看</el-button>
                        <el-button type="text" size="small" @click="dialog('edit',scope.row)">编辑</el-button>
                        <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- 分页 -------------------------->
            <br />
            <div style="float:right">
                <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    @size-change="pageSizeChange"
                    :page-size.sync="pageSize"
                    :page-sizes="[5,10,20,30,40,50]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                ></el-pagination>
            </div>
            <br />
        </el-card>
        <allDialog ref="allDialog" @getListPage="getListPage"></allDialog>
        <confirm :visiable="visiable" content="确定删除此条内容？" @cancel="delCancel" @confirm="delConfirm"></confirm>
    </el-main>
</template>
<script>
import allDialog from './dialog.vue';
import confirm from '@/components/mdSysConfirm';
export default {
    components: { allDialog, confirm },
    data() {
        return {
            form: {
                categoryName: null
            },
            visiable: false,
            currentId: null,
            tableData: [
                {
                    categoryName: '1111',
                    remarks: '备注'
                },
                {
                    categoryName: '222',
                    remarks: '备注'
                }
            ],
            currentPage: 1,
            pageSize: 10,
            total: 0,
            loading: false
        };
    },
    methods: {
        //请求接口列表数据
        getListPage() {
            // this.loading = true
            // this.api.sysApi.msgCategory
            //     .list({
            //         pageNum: this.currentPage,
            //         pageSize: this.pageSize,
            //         ...this.form
            //     })
            //     .then(res => {
            //         this.loading = false
            //         if (res.code == 0) {
            //             this.tableData = res.data.list
            //             this.total = res.data.total
            //         } else {
            //             this.$message.error(res.msg)
            //         }
            //     })
            //     .catch(err => {
            //         this.loading = false
            //     })
        },
        //新增和编辑,查看
        dialog(type, row = {}) {
            this.$refs.allDialog.start(type, row);
        },
        //删除
        del(row) {
            this.currentId = row.id;
            this.visiable = true;
        },
        //删除弹窗取消
        delCancel() {
            this.visiable = false;
        },
        //删除弹窗二次确认按钮
        delConfirm() {
             this.$message.success('成功，但我没删除');
             this.delCancel();
             //页面正常逻辑处理
            // this.api.sysApi.msgCategory.del(this.currentId).then(res => {
            //     if (res.code == 0) {
            //         this.$message.success(res.msg);
            //         this.delCancel();
            //         //处理页面只有一条数据时的边缘情况
            //         if (this.tableData.length == 1 && this.currentPage > 1) {
            //             this.currentPage -= 1;
            //         }
            //         this.getListPage();
            //     } else {
            //         this.$message.error(res.msg);
            //         this.delCancel();
            //     }
            // });
        },
        //分页
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getListPage();
        },
        pageSizeChange(val) {
            this.pageSize = val;
            this.getListPage();
        },
        //搜索
        search() {
            this.currentPage = 1;
            this.getListPage();
        },
        //重置
        reset() {
            this.form.categoryName = null;
            this.currentPage = 1;
            this.pageSize = 10;
            this.getListPage();
        }
    },
    created() {
        this.getListPage();
    }
};
</script>