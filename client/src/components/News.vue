<script>
export default{
    props: ["news"]
}
</script>

<template>
<div class="rounded  overflow-hidden shadow-lg bg-white mb-2 mt-5">
                <div class="px-6 py-4">
                    <div class="font-bold text-l px-2">Latest Japan News <i class="fa-solid fa-rss"></i> </div>
                    <ul class="pl-2 mt-5">
                        <li v-for="n in news" class="">
                            <p class="font-semibold text-xs text-slate-400">{{n.source.toUpperCase()}}</p>
                            <a :href="n.url" target="_blank"><h3>{{n.title}}</h3></a>
                            <br>
                        </li>
                    </ul>
                </div>
            </div>
</template>