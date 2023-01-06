const TextInput = (props) => {
  const {
    type = 'text',
    label,
    border,
    borderStyle = 'border border-neutral-100',
    textStyle = 'text-neutral-500 font-normal',
    bgColor = 'bg-gray-100',
    disabled,
    icon,
    error,
    placeholder,
    handleChange,
    onEnter,
    defaultValue,
    small,
    center,
    customCss
  } = props
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {  
      onEnter()
    }
  }
  return (
    <div className={customCss}>
      {label && <span className="text-xs font-medium pl-3 text-neutral-500 text-left block mb-1">{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        value={defaultValue}
        disabled={disabled}
        className={`pr-3 py-3 outline-0  w-full rounded-lg text-sm ${textStyle} transition-all duration-200 ${small ? 'w-20' : ''} ${center ? 'text-center' : 'text-left'} ${border ? `${borderStyle}` : ''
          } ${disabled ? `${bgColor} opacity-50 cursor-not-allowed` : ''} ${icon ? 'pl-11' : 'pl-3'}`}
      />
      {error && <span className="text-system-error font-medium text-left mt-1 text-xs">{error}</span>}
    </div>
  )
}

export default TextInput
