import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const CosultingRevenue = () => {
  const [chart, setChart] = useState([]);

  useEffect(() => {
    fetch("https://profit-prime-server.vercel.app/consultingRevenue")
      .then((res) => res.json())
      .then((data) => {
        setChart(data);
      });
  });
  return (
    <div>
      <SectionTitle
        subheading={"Know Your Business"}
        heading={"Sells Competitor"}
      ></SectionTitle>
      <ResponsiveContainer width={350} height={200}>
        <AreaChart
          data={chart}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="sells"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="price"
            stackId="1"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Area
            type="monotone"
            dataKey="target"
            stackId="1"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CosultingRevenue;