<template>
  <div
    id="VueSidebarUi"
    ref="VueSidebarUi"
    :style="
      'width:' + (isOpen ? (Number.isInteger(width) ? width + 'px;' : width) : '0px;') +
        'max-width:' + (isOpen ? (Number.isInteger(width) ? width + 'px;' : width) : '0px;') +
        'flex: 0 0 ' + (isOpen ? width + 'px;' : '0px;')
    "
    :class="{
      'hide-sidebar': !isOpen,
      'absolute': absolute,
      'with-shadow': !withoutShadow,
      'right': right
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
        <i
          v-if="closeBtnIconClass"
          :class="closeBtnIconClass"
        />
        <span
          v-else
        >
          {{ btnArrow }}
        </span>
      </button>
    </div>
    <div
      v-show="loader"
      class="load-layer flex align-center justify-content-center"
    >
      <Loader
        :size="60"
      />
    </div>
  </div>
</template>

<script>
  import 'style-helpers'
  import Loader from './_subs/Loader'
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
   * @param {string} closeBtnIconClass - The icon used in the toggle button
   * @emits toggle-menu
   */
  export default {
    name: 'VueSidebarUi',
    components: {
      Loader
    },
    props: {
      loader: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        required: true
      },
      withoutCloseBtn: {
        type: Boolean,
        default: false
      },
      withoutShadow: {
        type: Boolean,
        default: false
      },
      absolute: {
        type: Boolean,
        default: false
      },
      value: {
        type: Boolean,
        required: true
      },
      right: {
        type: Boolean,
        default: false
      },
      closeBtnIconClass: {
        type: String,
        default: null
      }
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

    // @media only screen and (max-width: $breakpoint-laptop-s) {
    //   position: absolute !important;
    //   height: calc(100vh - 55px) !important;
    //   left: 0;
    // }

    &.with-shadow {
      box-shadow: 2px 1px 8px rgba(0, 0, 0, 0.2);

      &.right {
        box-shadow: -2px -1px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &.hide-sidebar {
      box-shadow: none !important;
      transform: translateX(-100%);

      &.right {
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

        i {
          color: #80807E;
          font-size: 20px;
        }
      }
    }

    &.right {
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
      background: rgba(255, 255, 255, 0.1);
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      z-index: 10;
    }

    &.absolute {
      left: 0;
      position: absolute;
      height: 100vh;
      max-width: 90%;
    }

    &.right.absolute {
      right: 0;
      left: inherit;
    }
  }
</style>
