<template>
    <el-dialog
        :visible.sync="visiable"
        width="400px"
        custom-class="no-title"
        :before-close="handleClose"
        :show-close="false"
        :center="true"
        :close-on-click-modal="false"
        append-to-body
    >
        <div style="text-align: center">
            <i class="el-icon-warning" style="color: #e6a23c;font-size: 30px;margin-bottom: 15px;"></i>
            <p>{{ content || '' }}</p>
        </div>
        <div style="text-align: center;margin-top: 20px">
            <el-button size="small" type="primary " @click="confirmCommit">确定</el-button>
            <el-button size="small" @click="handleClose">取消</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    name: 'mdConfirm',
    data() {
        return {
            show: true
        }
    },
    props: ['content', 'visiable'],
    methods: {
        handleClose() {
            this.$emit('cancel')
        },
        confirmCommit() {
            this.$emit('confirm')
        }
    }
}
</script>

