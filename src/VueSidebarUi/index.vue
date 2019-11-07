<template>
  <div
    :id="id"
    ref="VueSidebarUi"
    :style="
      'width:' + (isOpen ? (Number.isInteger(width) ? width + 'px;' : width) : '0px;') +
        'max-width:' + (isOpen ? (Number.isInteger(width) ? width + 'px;' : width) : '0px;') +
        'flex: 0 0 ' + (isOpen ? width + 'px;' : '0px;')
    "
    :class="{
      'is-close': !isOpen,
      'is-absolute': absolute,
      'has-shadow': !withoutShadow,
      'is-right': right
    }"
    class="flex"
  >
    <transition
      name="fade"
      mode="in-out"
    >
      <div
        v-show="isOpen"
        class="content flex flex-1 w-100 flex-direction-column"
      >
        <slot />
      </div>
    </transition>
    <div
      v-if="!withoutCloseBtn"
      class="close-btn-container"
    >
      <button
        class="flex align-center justify-content-center"
        @click="isOpen = !isOpen"
      >
        <slot name="button-icon">
          <span>
            {{ btnArrow }}
          </span>
        </slot>
      </button>
    </div>
    <div
      v-show="loader && isOpen"
      class="load-layer flex align-center justify-content-center"
    >
      <slot name="content-loader">
        <CustomLoader />
      </slot>
    </div>
  </div>
</template>

<script>
  import 'style-helpers'
  import CustomLoader from './_subs/CustomLoader'
  // import chevronRightSvg from './assets/chevron_right.svg'
  // import chevronLeftSvg from './assets/chevron_left.svg'

  /**
   * Generic component used to show a togglable sidebar (left or right) in the layout
   * @module component - VueSidebarUi
   * @param {boolean} loader - Show / hide the loader inside the sidebar component
   * @param {number} width - The sidebar width
   * @param {boolean} [withoutCloseBtn=false] - Specify if the sidebar should have or not the toggle button
   * @param {boolean} [withoutShadow=false] - Specify if the sidebar should have the drop shadow
   * @param {boolean} [absolute=false] - Specify if the sidebar should be positionned in an absolute way.
   * @param {boolean} [isOpen=false] - Is the sidebar open or not
   * @param {boolean} [right=false] - Specify the sidebar direction, by default the sidebar is positionned in the left side.
   * @emits toggle-menu
   */
  export default {
    name: 'VueSidebarUi',
    components: {
      CustomLoader
    },
    props: {
      value: { type: Boolean, required: true },
      id: { type: String, default: 'VueSidebarUi' },
      loader: { type: Boolean, default: false },
      width: { type: Number, default: 350 },
      withoutCloseBtn: { type: Boolean, default: false },
      withoutShadow: { type: Boolean, default: false },
      absolute: { type: Boolean, default: false },
      right: { type: Boolean, default: false }
    },
    computed: {
      isOpen: {
        get () {
          return this.value
        },
        set (value) {
          this.$emit('input', value)
        }
      },
      btnArrow () {
        return this.isOpen
          ? this.right ? '►' : '◀'
          : this.right ? '◀' : '►'
      }
    }
  }
</script>

<style lang="scss" scoped>
  #VueSidebarUi {
    background-color: #FFF;
    position: relative;
    transition-duration: 0.2s;
    transform: translateX(0);
    z-index: 9;

    &.has-shadow {
      box-shadow: 2px 1px 8px rgba(0, 0, 0, 0.2);

      &.is-right {
        box-shadow: -2px -1px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &.is-close {
      box-shadow: none !important;
      transform: translateX(-100%);

      &.is-right {
        transform: translateX(100%);
      }
    }

    .close-btn-container {
      position: absolute;
      top: 8px;
      left: 100%;

      button {
        box-shadow: rgba(0, 0, 0, 0.2) 2px 1px 3px;
        width: 23px;
        height: 48px;
        outline: 0;
        background: rgba(lighten(#CCC, 5%), 0.9);
        cursor: pointer;
        border: none;
        border-left: 1px solid #CCC;
        padding: 0;
      }
    }

    &.is-right {
      .close-btn-container {
        right: 100%;
        left: inherit;

        button {
          border-right: 1px solid #CCC;
          box-shadow: rgba(0, 0, 0, 0.2) -2px 1px 3px;
        }
      }
    }

    .load-layer {
      background: rgba(0, 0, 0, 0.2);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 10;
    }

    &.is-absolute {
      left: 0;
      position: absolute;
      height: 100vh;
      max-width: 90%;
    }

    &.is-right.is-absolute {
      right: 0;
      left: inherit;
    }
  }
</style>
