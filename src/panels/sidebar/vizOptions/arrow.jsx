import React from 'react';
import { CONSTANTS } from 'amphion';
import OptionRow from '../../../components/optionRow';
import { Input } from '../../../components/styled';

const { DEFAULT_OPTIONS_ARROW } = CONSTANTS;

class ArrowOptions extends React.PureComponent {
  render() {
    const { options: propsOptions, updateOptions } = this.props;

    const { alpha, color, headLength, headRadius, shaftLength, shaftRadius } = {
      ...DEFAULT_OPTIONS_ARROW,
      ...propsOptions,
    };

    return (
      <>
        <OptionRow label="Color">
          <Input
            name="color"
            type="color"
            value={color}
            data-id="color"
            onChange={updateOptions}
          />
        </OptionRow>

        <OptionRow label="Alpha">
          <Input
            name="alpha"
            type="number"
            step="0.1"
            value={alpha}
            data-id="alpha"
            onChange={updateOptions}
          />
        </OptionRow>

        <OptionRow label="Shaft Length">
          <Input
            name="shaftLength"
            type="number"
            step="0.1"
            value={shaftLength}
            data-id="shaftLength"
            onChange={updateOptions}
          />
        </OptionRow>

        <OptionRow label="Shaft Radius">
          <Input
            name="shaftRadius"
            type="number"
            step="0.1"
            value={shaftRadius}
            data-id="shaftRadius"
            onChange={updateOptions}
          />
        </OptionRow>

        <OptionRow label="Head Length">
          <Input
            name="headLength"
            type="number"
            step="0.1"
            value={headLength}
            data-id="headLength"
            onChange={updateOptions}
          />
        </OptionRow>

        <OptionRow label="Head Radius">
          <Input
            name="headRadius"
            type="number"
            step="0.1"
            value={headRadius}
            data-id="headRadius"
            onChange={updateOptions}
          />
        </OptionRow>
      </>
    );
  }
}

export default ArrowOptions;
