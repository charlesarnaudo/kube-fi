<template>
    <div class="viewport md-elevation-24">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Cluster Statistics</span>
      </md-toolbar>
      <md-list class="md-double-line">
        <md-subheader>Latency in Ms</md-subheader>
        <md-list-item>
          <md-icon class="md-primary">access_time</md-icon>

          <div class="md-list-item-text">
            <span>{Latency}</span>
          </div>
        </md-list-item>
      </md-list>
    </div>
</template>

<script>
    export default {
        name: 'Cluster Statistics'
    }
</script>

<style lang="scss" scoped>
  .viewport {
    width: 320px;
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
  }
</style>
