<template>
    <div class="migrate">
        <h1 style="margin: 0"><i class="el-icon-info"></i>Important Notice</h1>
        <p>{{ `This Domain "${host}" No longer in use, will be deactivated in the near future, please transfer to a new domain name as soon as possible` }}</p>
        <a
            :href="url"
            target="_blank"
            class="el-button el-button--danger"
        >
            <i class="el-icon-link"></i>
            {{ url }}
        </a>
    </div>
</template>

<script>
export default {
    name: "MigrateNotification",
    data() {
        return {
            url: "",
            host: location.hostname,
        }
    }
}
</script>

<style lang="scss" scoped>
.migrate {
    background-color: #fef0f0;
    color: #f56c6c;
    padding: 12px;
    border-radius: 3px;
}
</style>