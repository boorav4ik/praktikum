import { render } from '@testing-library/react';
import { DoubleTypography } from './index';
import { Variant } from '@mui/material/styles/createTypography'

const firstContent = 'Hello';
const secondContent = 'World';
const firstProps : { variant: Variant, weight: number} = { variant: 'h1', weight: 700};
const secondProps : { variant: Variant, weight: number, color: string} = { variant: 'h2', weight: 700, color: 'green.dark' };
const sxProps = { marginTop: 2, fontSize: 16 };
describe('DoubleTypography component', () => {
  it('renders two typographies with correct text', () => {

    const { getByText } = render(
      <DoubleTypography
        first={{ content: firstContent, ...firstProps }}
        second={{ content: secondContent, ...secondProps }}
        sx={sxProps}
      />
    );

    const firstTypography = getByText(firstContent);
    const secondTypography = getByText(secondContent);

    expect(firstTypography).toBeInTheDocument();
    expect(secondTypography).toBeInTheDocument();
  })

  it('renders two typographies with correct props', () => {

    const { getByText } = render(
      <DoubleTypography
        first={{ content: firstContent, ...firstProps }}
        second={{ content: secondContent, ...secondProps }}
        sx={sxProps}
      />
    );

    const firstTypography = getByText(firstContent);
    const secondTypography = getByText(secondContent);

    expect(firstTypography).toHaveStyle(`font-weight: ${firstProps.weight}`);
    expect(secondTypography).toHaveStyle(`font-weight: ${secondProps.weight}`);


    expect(firstTypography).toHaveStyle(`color: green.64`);
    expect(secondTypography).toHaveStyle(`color: ${secondProps.color}`);

    expect(firstTypography).toHaveStyle(`margin-top: ${sxProps.marginTop * 8}px`);
    expect(secondTypography).toHaveStyle(`margin-top: ${sxProps.marginTop * 8}px`);
    expect(firstTypography).toHaveStyle(`font-size: ${sxProps.fontSize}px`);
    expect(secondTypography).toHaveStyle(`font-size: ${sxProps.fontSize}px`);
  })
})