interface IColorsKeys {
  [key: string]: string;
}

interface IColors extends IColorsKeys{
  red: string
  orange: string
  yellow: string
  green: string
  blue: string
  violet: string
  brown: string
  grey: string
}

export const COLORS: IColors = {
  red: 'red',
  orange: 'orange',
  yellow: 'yellow',
  green: 'green',
  blue: 'blue',
  violet: 'violet',
  brown: 'brown',
  grey: 'grey',
}
