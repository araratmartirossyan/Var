/* eslint-disable */

const hongBaoMarker = {
  props: ['text'],
  template: `<i class="fa fa-jpy"></i>`
}

const markConfig = {
  contentRender:(h, instance) => h( hongBaoMarker,
    {
      class:'hong-bao-' + instance.$attrs.hType,
      props: {
        text: '!'
      }
    }
  )
}

export { markConfig }