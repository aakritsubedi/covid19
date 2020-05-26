<template>
  <div class="card" style="width:30%;margin:10px;">
    <img class="card-img-top" :src="news.image_url" alt="Card image cap" style="height:125px;" />
    <div class="card-body">
      <h5 class="card-title">{{news.title}}</h5>
      <p
        class="card-text"
      >{{news.summary}}</p>
      <a :href="news.url" class="btn btn-primary" target="_blank">Read More</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: ['news']
}
</script>