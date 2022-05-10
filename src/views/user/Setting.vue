<template>
    <section>
        <el-card shadow="never">
            <div slot="header">
                个人设置
            </div>
            <div class="columns">
                <div class="column is-full">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="基础信息" name="first">
                            <el-form ref="ruleForm" :label-position="labelPosition" label-width="100px" :model="user">
                                <el-form-item label="账号">
                                    <el-input v-model="user.username" disabled />
                                </el-form-item>
                                <el-form-item label="昵称">
                                    <el-input v-model="user.alias" />
                                </el-form-item>
                                <el-form-item label="简介">
                                    <el-input v-model="user.bio" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button type="primary" @click="submitForm()">提交</el-button>
                                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="电子邮箱" name="third">
                            <el-form ref="dynamicValidateForm" :model="user" label-width="100px" class="demo-dynamic">
                                <el-form-item
                                    prop="email"
                                    label="邮箱"
                                    :rules="[
                                        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                                    ]"
                                >
                                    <el-input v-model="user.email" />
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" @click="submitForm()">提交</el-button>
                                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="手机号" name="fourth">
                            <el-form ref="dynamicValidateForm" :model="user" label-width="100px" class="demo-dynamic">
                                <el-form-item
                                    prop="mobile"
                                    label="手机">
                                    <el-input v-model="user.mobile" />
                                </el-form-item>

                                <el-form-item>
                                    <el-button type="primary" @click="submitForm()">提交</el-button>
                                    <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
                                </el-form-item>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </div>
            </div>
        </el-card>
    </section>
</template>

<script>
import {getInfo, update} from '@/api/user'

export default {
    name: 'Setting',
    data() {
        return {
            activeName: 'first',
            labelPosition: 'right',
            user: {
                id: '',
                username: '',
                alias: '',
                bio: '',
                email: '',
                mobile: '',
            },
        }
    },
    created() {
        this.fetchInfo()
    },
    methods: {
        fetchInfo() {
            getInfo(this.$route.params.username).then(res => {
                const { data } = res
                this.user = data
            })
        },
        handleClick(tab, event) {
            console.log(tab, event)
        },
        submitForm() {
            update(this.user).then(res => {
                if(res){
                    this.$buefy.toast.open({
                        message: '信息修改成功！',
                        type: 'is-success'
                    })
                    this.fetchInfo()
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },

    }
}
</script>

<style scoped>
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 120px;
        height: 120px;
        display: block;
    }
</style>