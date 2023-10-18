import React from 'react'

import { Spacing } from '@ds.ag/foundation'

interface ColorProps {
  hexCode: string
  width?: keyof typeof Spacing
  height?: keyof typeof Spacing
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const clasName = `dse-width-${width} dse-height-${height}`
  return <div className={clasName} style={{ backgroundColor: hexCode }}></div>
}

export default Color
