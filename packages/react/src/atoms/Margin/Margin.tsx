import React from 'react'

import { Spacing } from '@ds.ag/foundation'

interface MarginProps {
  children: React.ReactNode
  space?: keyof typeof Spacing
  left?: boolean
  right?: boolean
  top?: boolean
  bottom?: boolean
}

const Margin: React.FC<MarginProps> = ({
  children,
  space = Spacing.md,
  left,
  right,
  top,
  bottom,
}) => {
  const side = left
    ? `dse-margin-left${space ? `-${space}` : ''}`
    : right
    ? `dse-margin-right${space ? `-${space}` : ''}`
    : top
    ? `dse-margin-top${space ? `-${space}` : ''}`
    : bottom
    ? `dse-margin-bottom${space ? `-${space}` : ''}`
    : ``

  const className = side ? side : `dse-margin-${space}`

  return <div className={className}>{children}</div>
}

export default Margin
