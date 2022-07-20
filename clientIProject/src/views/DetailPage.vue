<script>
import { mapState } from "pinia";
import { useRequestStore } from "../stores/request";

export default {
    name:'DetailPage',
    computed:{
        ...mapState(useRequestStore,["request"])
    }
}
</script>
<template>
<h1 style="margin-left: 20px;">Detail Request</h1>
<h3 style="margin-left: 20px;">Title :{{request.title}}</h3>
<h3 style="margin-left: 20px;">Description :{{request.description}}</h3>
<h3 style="margin-left: 20px;">Points :{{request.points}}</h3>
<h3 style="margin-left: 20px;">Status :{{request.status}}</h3>
<h3 style="margin-left: 20px;">Address :{{request.User.address}}</h3>
<h3 style="margin-left: 20px;">Contact info :{{request.User.phoneNumber}}</h3>
</template>