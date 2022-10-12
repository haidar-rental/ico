<script setup>
import PilihItem from "./PilihItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import ToolingIcon from "./icons/IconTooling.vue";
import EcosystemIcon from "./icons/IconEcosystem.vue";
import CommunityIcon from "./icons/IconCommunity.vue";
import SupportIcon from "./icons/IconSupport.vue";
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
          <DocumentationIcon />
        </template>
        <template #heading>Menjaga Kebersihan</template>
        <template #description>
          Setiap barang dijaga kebersihannya sebelum diterima oleh pelanggan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Steril</template>
        <template #description>
          Sebelum diterima pelanggan, barang sudah disterilkan dengan alkohol
          70%.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Harga Terjangkau</template>
        <template #description>
          Harga sewa sangat terjangkau, jadi ramah dikantong.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Data Aman</template>
        <template #description>
          Data yang Anda berikan, kami pastikan aman dan tidak diperjualbelikan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Pilihan Bervariasi</template>
        <template #description>
          Banyak pilihan untuk disewa, dan dapat disesuaikan dengan kebutuhan.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Berpengalaman</template>
        <template #description>
          Kami beroperasi sejak 2018 melayani kebutuhan sewa perlengkapan bayi
          untuk area Jogja dan sekitarnya.
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Garansi uang kembali</template>
        <template #description>
          Kami beri garansi uang kembali jika barang ada cacat.
          <strong>*)</strong>
        </template>
      </PilihItem>

      <PilihItem>
        <template #icon>
          <DocumentationIcon />
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
