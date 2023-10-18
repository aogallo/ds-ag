import React, {
  KeyboardEventHandler,
  createRef,
  useEffect,
  useRef,
  useState,
} from 'react'

import Text from 'atoms/Text/Text'

interface SelectOption {
  label: string
  value: string
}

interface RenderOptionProps {
  isSelected: boolean
  option: SelectOption
  getOptionRecommendedProps: (overrideProps?: Object) => Object
}

interface SelectProps {
  label?: string
  onOptionSelected?: (option: SelectOption, optionIndex: number) => void
  options?: SelectOption[]
  renderOption?: (props: RenderOptionProps) => React.ReactNode
}

const Select: React.FC<SelectProps> = ({
  options = [],
  label = 'Please select the option...',
  onOptionSelected: handler,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<null | number>(null)
  const labelRef = useRef<HTMLButtonElement>(null)
  const [overlayTop, setOverlayTop] = useState<number>(0)
  const [optionRefs, setOptionsRefs] = useState<
    React.RefObject<HTMLLIElement>[]
  >([])

  useEffect(() => {
    setOverlayTop((labelRef.current?.offsetHeight || 0) - 13)
  }, [labelRef.current?.offsetHeight])

  useEffect(() => {
    setOptionsRefs(options.map((_) => createRef<HTMLLIElement>()))
  }, [options.length])

  const onClickOption = (option: SelectOption, optionIndex: number) => {
    setIsOpen(!isOpen)

    if (handler) {
      handler(option, optionIndex)
    }
    setSelectedIndex(optionIndex)
    setIsOpen(false)
  }

  const KEY_CODES = {
    ENTER: 13,
    SPACE: 32,
    DOWN_ARROW: 40,
  }

  const onButtonKeyDown: KeyboardEventHandler = (event) => {
    event.preventDefault()
    if (
      [KEY_CODES.ENTER, KEY_CODES.SPACE, KEY_CODES.DOWN_ARROW].includes(
        event.keyCode,
      )
    ) {
      setIsOpen(true)
    }
  }

  return (
    <div className='dse-select'>
      <button
        data-testid='dseSelectButton'
        onKeyDown={onButtonKeyDown}
        aria-controls='dse-select-list'
        aria-haspopup={true}
        aria-expanded={isOpen ? true : undefined}
        ref={labelRef}
        className='dse-select__label'
        onClick={() => setIsOpen(!isOpen)}
      >
        <Text>
          {selectedIndex === null ? label : options[selectedIndex].label}
        </Text>
        <svg
          className={`dse-select__caret ${
            isOpen ? 'dse-select__caret--open' : 'dse-select__caret-closed'
          }`}
          width='1rem'
          height='1rem'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          />
        </svg>
      </button>

      {isOpen ? (
        <ul
          role='menu'
          id='dse-select-list'
          style={{ top: overlayTop }}
          className='dse-select__overlay'
        >
          {options.map((option, optionIndex) => {
            const isSelected = selectedIndex === optionIndex

            const ref = optionRefs[optionIndex]

            const renderOptionsProps = {
              option,
              isSelected,
              getOptionRecommendedProps: (overrideProps = {}) => {
                return {
                  ref,
                  role: 'menuitemradio',
                  'aria-label': option.label,
                  'aria-checked': isSelected ? true : undefined,
                  className: `dse-select__option ${
                    isSelected ? 'dse-select__option--selected' : ''
                  }`,
                  key: option.value,
                  onClick: () => onClickOption(option, optionIndex),
                  ...overrideProps,
                }
              },
            }

            if (renderOption) {
              return renderOption(renderOptionsProps)
            }

            return (
              <li
                ref={ref}
                className={`dse-select__option ${
                  isSelected ? 'dse-select__option--selected' : ''
                }`}
                key={option.value}
                onClick={() => onClickOption(option, optionIndex)}
              >
                <Text> {option.label}</Text>

                {isSelected ? (
                  <svg
                    width='1rem'
                    height='1rem'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-6 h-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4.5 12.75l6 6 9-13.5'
                    />
                  </svg>
                ) : null}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Select
