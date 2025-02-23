"use client";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Teal", value: 48, color: "#14b8a6" }, // Right
  { name: "Purple", value: 33, color: "#8b5cf6" }, // Bottom Left
  { name: "Red", value: 19, color: "#ef4444" }, // Top Left
];

const lineChartData = [
  { date: "19 June", value: 0 },
  { date: "20 June", value: 1000 },
  { date: "21 June", value: 3500 },
  { date: "22 June", value: 3200 },
  { date: "23 June", value: 4000 },
  { date: "24 June", value: 5500 },
  { date: "25 June", value: 6500 },
  { date: "26 June", value: 6500 },
];

const CenterGraphs = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // ========================================
  return (
    <div className="flex gap-5">
      {/* left -------------------------------- */}
      <div className="bg-white w-[500px] px-4 py-6 shadow-md text-sm">
        <div className="h-full flex justify-center items-center flex-col">
          <div className="flex justify-between items-centers w-full my-4">
            <h2>Total revenue</h2>
            <div className="flex gap-2">
              <span>Month</span>
              <span>Week</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineChartData}>
              <CartesianGrid />
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="date" interval={0} />
              {/* <YAxis domain={[1000, 7000]} /> */}
              <YAxis
                domain={[1000, 7000]}
                ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000]}
              />
              <Tooltip />
              <Line
                // type="monotone"
                dataKey="value"
                stroke="#0f766e "
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* right --------------------------------- */}
      <div className="flex w-[450px] p-5 flex-col justify-center items-center bg-white shadow-md">
        <div className="flex w-full items-center justify-between">
          <h2>Budget</h2>
          <div className="flex gap-2">
            <span>Profitability</span>
            <span>Status</span>
          </div>
        </div>
        <div className="relative">
          {/* Larger Pie Chart */}
          <PieChart width={320} height={320}>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70} // Increased thickness
              outerRadius={120} // Increased size
              startAngle={90}
              endAngle={-270} // Keeps correct positioning
              label={({ cx, cy, midAngle, outerRadius, value }) => {
                const RADIAN = Math.PI / 180;
                const radius = outerRadius - 30; // Adjusted for proper centering inside
                const x = cx + Math.cos(-midAngle * RADIAN) * radius;
                const y = cy + Math.sin(-midAngle * RADIAN) * radius;

                return (
                  <text
                    x={x}
                    y={y}
                    fill="white" // White text inside segments
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-base font-bold"
                  >
                    {value}%
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          {/* Centered Text (Total Projects) */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold text-gray-700">5</p>
            <p className="text-sm font-semibold text-gray-900">
              Total Projects
            </p>
          </div>
        </div>
        {/* ======================= */}
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-red-600 h-2 w-2"></div>
            <span>Over budget</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#8b5cf6] h-2 w-2"></div>
            <span>On budget</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-[#ef4444] h-2 w-2"></div>
            <span>Under budget</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterGraphs;
