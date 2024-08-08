import Plot from 'react-plotly.js';

const Graph: React.FC<any> = ({
    x,
    y
}) => {

    return (
        <>
            <Plot
                data={[
                    {
                        x: x,
                        y: y,
                        type: 'scatter',
                        mode: 'lines',
                        marker: { color: '#83BF8D' },
                    }
                ]}
                layout={{ width: 900, height: 600}}
            />
        </>
    )
}

export default Graph;