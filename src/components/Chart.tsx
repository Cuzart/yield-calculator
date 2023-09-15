import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({
  withoutInterest,
  interest,
}: {
  withoutInterest: number;
  interest: number;
}) => {
  const sum = withoutInterest + interest;

  const data = {
    labels: [
      'Zinsen ' + ((interest / sum) * 100).toFixed() + '%',
      'Eingezahlt ' + ((withoutInterest / sum) * 100).toFixed() + '%',
    ],
    datasets: [
      {
        data: [interest, withoutInterest],
        backgroundColor: ['#6BD09E', '#43928880'],
        borderColor: ['#20293A'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'bottom',

        labels: {
          boxWidth: 16,
          boxHeight: 16,
          useBorderRadius: true,
          borderRadius: 8,
          borderWidth: 0,
          color: '#FFFFFF90',
          font: { size: 14, family: 'DM Sans Variable' },
        },
      },

      tooltip: {
        padding: 10,
        caretSize: 0,
        borderWidth: 1,
        borderColor: '#20293A',
        backgroundColor: '#030816',
        cornerRadius: 8,
        boxPadding: 6,
        titleFont: { size: 14, family: 'DM Sans Variable', weight: 500 },
        bodyFont: { size: 16, family: 'DM Sans Variable', weight: 900 },

        callbacks: {
          label: function (context: any) {
            let label = context.dataset.label || '';

            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR',
                maximumFractionDigits: 0,
              }).format(context.parsed);
            }
            return label;
          },
        },
      },
    },
  };

  return <Pie data={data} options={options as any} />;
};
