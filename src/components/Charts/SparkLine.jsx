<<<<<<< HEAD
import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";
=======
import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
>>>>>>> 5723ab7e9ba4cc987518b2efbb10f1e04396739f

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
<<<<<<< HEAD
          format: "${x} : data ${yval}",
=======
          format: '${x} : data ${yval}',
>>>>>>> 5723ab7e9ba4cc987518b2efbb10f1e04396739f
          trackLineSettings: {
            visible: true,
          },
        }}
<<<<<<< HEAD
        markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
=======
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
>>>>>>> 5723ab7e9ba4cc987518b2efbb10f1e04396739f
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
