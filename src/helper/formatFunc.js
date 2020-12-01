
export const titleCase = (string) => {
    return string
      .split(' ')
      .map(word => word.substr(0,1).toUpperCase() + word.substr(1,word.length))
      .join(' ');
};

export const hintFormat = (string) => {
    if(string) {
      return string
      .split(',').join(' ')
      .split('"').join('')
      .split('{').join('')
      .split('}').join('')
      .split('[').join('')
      .split(']').join('');
    } return '';
}