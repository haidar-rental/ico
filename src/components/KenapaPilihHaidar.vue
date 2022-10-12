<script setup>
import PilihItem from "./PilihItem.vue";
import JagaKebersihan from "./icons/IconJagaKebersihan.vue";
import Steril from "./icons/IconSteril.vue";
import HargaTerjangkau from "./icons/IconHargaTerjangkau.vue";
import DataAman from "./icons/IconDataAman.vue";
import PilihanBervariasi from "./icons/IconPilihanBervariasi.vue";
import Berpengalaman from "./icons/IconBerpengalaman.vue";
import Garansi from "./icons/IconGaransi.vue";
import SyaratSewa from "./icons/IconSyaratSewa.vue";
</script>

<template>
  <div class="widget HTML" data-version="2" id="HTML1">
    <h2 class="pb-2 text-center">Kenapa Haidar Rental Jogja?</h2>
    <hr class="mx-auto text-primary my-4" style="height: 3px; width: 70px" />
    <div
      class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5 why"
    >
      <PilihItem>
        <template #icon>
          <JagaKebersihan />
        </template>
        <template #heading>Menjaga Kebersihan</template>
        <template #description>
          Setiap barang dijaga kebersihannya sebelum diterima oleh pelanggan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <Steril />
        </template>
        <template #heading>Steril</template>
        <template #description>
          Sebelum diterima pelanggan, barang sudah disterilkan dengan alkohol
          70%.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <HargaTerjangkau />
        </template>
        <template #heading>Harga Terjangkau</template>
        <template #description>
          Harga sewa sangat terjangkau, jadi ramah dikantong.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DataAman />
        </template>
        <template #heading>Data Aman</template>
        <template #description>
          Data yang Anda berikan, kami pastikan aman dan tidak diperjualbelikan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <PilihanBervariasi />
        </template>
        <template #heading>Pilihan Bervariasi</template>
        <template #description>
          Banyak pilihan untuk disewa, dan dapat disesuaikan dengan kebutuhan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <Berpengalaman />
        </template>
        <template #heading>Berpengalaman</template>
        <template #description>
          Kami beroperasi sejak 2018 melayani kebutuhan sewa perlengkapan bayi
          untuk area Jogja dan sekitarnya.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <Garansi />
        </template>
        <template #heading>Garansi uang kembali</template>
        <template #description>
          Kami beri garansi uang kembali jika barang ada cacat.
          <strong>*)</strong>
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <SyaratSewa />
        </template>
        <template #heading>Syarat sewa mudah</template>
        <template #description>
          Syarat sewa mudah gak bikin ribet, pelanggan hanya perlu menyiapkan
          KTP. <strong>**)</strong>
        </template>
      </PilihItem>
    </div>
  </div>
</template>

<style scoped>
.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
</style>
