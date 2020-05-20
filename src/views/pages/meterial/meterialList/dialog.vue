<template>
    <div>
        <!-- 查看弹窗------------------------ -->
        <el-dialog
            title="查看"
            :visible.sync="checkVisiable"
            :before-close="handleClose"
            :close-on-click-modal="false"
            v-loading="loading"
            width="600px"
            class="sys-dialog"
        >
            <el-form label-width="110px">
                <el-form-item label="类目名称：">{{form.categoryName}}</el-form-item>
            </el-form>
        </el-dialog>
        <!-- 新增编辑弹窗----------------------------------- -->
        <el-dialog
            :title="type=='add'?'新增':'编辑'"
            :visible.sync="dialogVisiable"
            :before-close="handleClose"
            :close-on-click-modal="false"
            v-loading="loading"
            width="600px"
            class="sys-dialog"
        >
            <el-form label-width="110px" :model="form" :rules="rules" ref="ruleForm">
                <el-form-item label="类目名称：" prop="categoryName">
                    <el-input size="small" v-model="form.categoryName" placeholder="请输入类目名称"></el-input>
                </el-form-item>
                <!-- <el-form-item label="消息类型：" prop="msgType">
                    <el-select
                        v-model="form.msgType"
                        placeholder="请选择消息类型"
                        size="small"
                        style="width:100%"
                    >
                        <el-option
                            v-for="item in msgType "
                            :key="item.dictCode"
                            :label="item.dictName"
                            :value="item.dictCode"
                        ></el-option>
                    </el-select>
                </el-form-item>-->
                <div style="text-align:center">
                    <el-button type="primary" @click="confirm" size="small">确 定</el-button>
                    <el-button @click="handleClose" size="small">取 消</el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            checkVisiable: false,
            dialogVisiable: false,
            type: null,
            tableData: [],
            loading: false,
            form: {
                categoryName: null
            },
            currentPage: 1,
            pageSize: 10,
            total: 0,
            //表单验证规则
            rules: {
                categoryName: [{ required: true, message: '请选择类目' }]
            }
        };
    },
    methods: {
        //新增，编辑弹窗关闭
        handleClose() {
            this.checkVisiable = false;
            this.dialogVisiable = false;
            this.form = {
                categoryName: null
            };
            this.$refs.ruleForm.resetFields();
        },
        //确定
        confirm() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.$message.success('成功，但我没改数据');
                    this.handleClose();
                    // this.emit('getList');

                    // let url;
                    // if (this.type == 'add') {
                    //     //新增的后台请求地址
                    //     url = this.api.sysApi.msgTemplate.add;
                    // } else {
                    //     //编辑的后台请求地址
                    //     url = this.api.sysApi.msgTemplate.edit;
                    // }
                    // url(this.form).then(res => {
                    //     if (res.code == 0) {
                    //         this.message.success(res.msg);
                    //         this.handleClose();
                    //         this.emit('getList');
                    //     } else {
                    //         this.message.error(res.msg);
                    //     }
                    // });
                }
            });
        },
        // 获取详情数据
        getDetail(row, callback) {
            this.form = { ...row };
            callback();
            // this.loading = true;
            // this.api.sysApi.msgTemplate
            //     .detail(row.id)
            //     .then(res => {
            //         this.loading = false;
            //         if (res.code == 0) {
            //             this.form = res.data;
            //             callback(res);
            //         } else {
            //             this.message.error(res.msg);
            //         }
            //     })
            //     .catch(err => {
            //         this.loading = false;
            //     });
        },
        //打开查看，新增，编辑弹窗
        start(type, row) {
            this.type = type;
            if (type == 'add') {
                //新增
                this.dialogVisiable = true;
            } else if (type == 'edit') {
                //编辑
                this.getDetail(row, res => {
                    this.dialogVisiable = true;
                });
            } else {
                //查看
                this.getDetail(row, res => {
                    this.checkVisiable = true;
                });
            }
        }
    }
};
</script>