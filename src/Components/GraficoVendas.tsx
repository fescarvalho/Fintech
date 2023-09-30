import {
  LineChart,
  XAxis,
  Tooltip,
  Line,
  YAxis,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { IVenda } from "../Context/DataContext";

const dadosGrafito = [
  {
    data: "2023-05-03",
    pago: 203,
    processando: 32000,
    falha: 200333,
  },
  {
    data: "2023-05-04",
    pago: 111,
    processando: 22222,
    falha: 1212131,
  },
  {
    data: "2023-05-06",
    pago: 2222,
    processando: 1222,
    falha: 23131231,
  },
];
const GraficoVendas = ({ data }: { data: IVenda[] }) => {
  return (
    <ResponsiveContainer width="99%" height={400}>
      <LineChart data={dadosGrafito}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#A36af9" strokeWidth={3} />
        <Line type="monotone" dataKey="processando" stroke="#FBCb21" strokeWidth={3} />
        <Line type="monotone" dataKey="falha" stroke="#000" strokeWidth={3} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoVendas;
