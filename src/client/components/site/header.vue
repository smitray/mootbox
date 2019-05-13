<template>
  <nav class="bg-teal py-6">
    <div class="container flex items-center justify-between flex-wrap">
      <div class="flex items-center flex-no-shrink text-white mr-6">
        <span class="font-semibold tracking-tight text-xl">
          MootBox
        </span>
      </div>
      <div class="block sm:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded
          text-teal-light border-teal-light hover:border-white hover:text-white"
          @click="toggle"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full flex-grow sm:flex sm:items-center sm:w-auto"
        :class="open ? 'block': 'hidden'"
      >
        <div class="text-sm flex-grow">
          <a
            href="#"
            class="no-underline block mt-4 sm:inline-block
            sm:mt-0 text-teal-lighter hover:text-white mr-4"
          >
            Docs
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    open: false
  }),
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
