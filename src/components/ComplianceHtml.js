import React from 'react'

import sdk from '../sdk'

class ComplianceHtml extends React.Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  componentDidMount() {
    const { cas } = this.props

    sdk.ComplianceHtml({
      id: this.ref.current,
      cas,
    })
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.cas && this.props.cas !== nextProps.cas) {

      const node = this.ref.current
      if (node.firstChild) {
        node.removeChild(node.firstChild)
      }

      sdk.ComplianceHtml({
        id: node,
        cas: nextProps.cas,
      })
    }
  }

  render() {
    return (
      <div ref={this.ref}/>
    );
  }
}

export default ComplianceHtml
