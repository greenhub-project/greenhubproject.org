<template>
  <div id="dataset" class="container">
    <PageHeader title="dataset" icon="fa-database" />
    <section id="dataset-resources" class="section">
      <div class="content">
        <h1>Dataset Resources</h1>
        <p>In this page is available the latest version of the GreenHub dataset. It was generated on <strong>August 2020</strong>.</p>
        <p>The dataset contains the raw data formatted in csv text files. It is organized as follows:</p>
        <ul>
          <li><a href="https://farmer.greenhubproject.org/storage/dataset/dataset-devices.7z">Devices</a></li>
          <li><a href="https://farmer.greenhubproject.org/storage/dataset/dataset-samples.7z">Samples</a></li>
          <li><a href="https://farmer.greenhubproject.org/storage/dataset/dataset-app_processes.7z">App processes</a></li>
        </ul>
        <p>Each dataset file is paginated, therefore each part is split in small digestable files. All download files are compressed in 7z format for storage convenience.</p>
        <p>For documentation about the schema and contents of the dataset, please refer to our paper <a href="http://greenlab.di.uminho.pt/wp-content/uploads/2019/04/GreenHubFarmerFinal.pdf">GreenHub Farmer: Real-world data for Android Energy Mining</a>.</p>
      </div>
    </section>
    <p class="small">
      Photo by
      <a href="https://unsplash.com/@jaymantri">Jay Mantri
      </a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Dataset',

  layout: 'page',

  head () {
    return {
      title: 'GreenHub - Dataset'
    }
  }
}
</script>

<style>

</style>
