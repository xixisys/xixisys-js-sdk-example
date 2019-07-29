import React from 'react'

import sdk from '../sdk'

class SdsHtml extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { cas, edition } = this.props

    sdk.SdsHtml({
      id: this.ref.current,
      cas,
      edition,
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.cas && (this.props.cas !== nextProps.cas || this.props.edition !== nextProps.edition)) {

      const node = this.ref.current
      if (node.firstChild) {
        node.removeChild(node.firstChild)
      }

      sdk.SdsHtml({
        id: node,
        cas: nextProps.cas,
        edition: nextProps.edition,
      })
    }
  }

  render() {
    return (
      <div ref={this.ref}/>
    );
  }
}

export default SdsHtml
