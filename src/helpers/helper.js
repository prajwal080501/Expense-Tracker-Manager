import _ from 'lodash';
export function getSum(transaction, type) {
    let sum = _(transaction)
        .groupBy("type")
        .map((objs, key) => {
            if (!type) return _.sumBy(objs, 'amount'); // [300, 350, 500]
            return {
                'type': key,
                'color': objs[0].color,
                'total': _.sumBy(objs, 'amount')
            }
        })
        .value()
    return sum;
}

export function getLabels(transaction) {
    let amountSum = getSum(transaction, 'type');
    console.log(amountSum, "amountSum");
    let Total = _.sum(getSum(transaction));
    console.log(Total, "total");
    let percent = amountSum.map((item) => {
        return {
            ...item,
            percent: (item.total / Total) * 100
        }
    })

    return percent;
}
const plugin = {
    //    plugin for changing background color canvas
    id: 'customCanvasBackgroundColor',
    beforeDraw: (chart) => {
        const ctx = chart.canvas.getContext('2d');
        ctx.save();
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = chart.options.plugins.customCanvasBackgroundColor.color;
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
    }
};
export function chart_data (transaction, custom) {
    let bg = _.map(transaction, a => a.color);
    bg= _.uniq(bg);
    console.log(bg, "bg");
    let datavalues = getSum(transaction);
    const config = {
        data: {
            datasets: [
                {
                    data: datavalues,
                    backgroundColor: bg,
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1,
                    hoverOffset: 4,
                    borderRadius: 30,
                    spacing: 10,
                    maxRotation: 2,
                    // set diameter of chart

                },
            ],
            options: {

                cutout: 115,
                responsive: true,
                animations: {
                    radius: {
                        duration: 1000,
                        easing: 'linear',
                        loop: (context) => context.active
                    },
                    arc: {
                        duration: 1000,
                        easing: 'linear',
                        loop: (context) => context.active
                    }
                },
                plugins: {
                    customCanvasBackgroundColor: {
                        color: 'lightgreen'
                    },
                },
                plugin: { plugin },
            },
        }
    }
    return custom ?? config;
}

export function getTotal (transaction) {
    return _.sum(getSum(transaction));
}
