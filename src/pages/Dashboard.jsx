import { useState, useEffect } from "react";
import { Users, DollarSign, CreditCard, TrendingDown } from "lucide-react";

export default function Dashboard() {
  const stats = [
    {
      label: "Users",
      value: "1,204",
      icon: Users,
    },
    {
      label: "Revenue",
      value: "$48,200",
      icon: DollarSign,
    },
    {
      label: "Active Plans",
      value: "892",
      icon: CreditCard,
    },
    {
      label: "Churn",
      value: "2.1%",
      icon: TrendingDown,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">{stat.label}</span>
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <div className="text-3xl font-bold text-white">{stat.value}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}