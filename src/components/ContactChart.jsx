import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "@/lib/api";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ContactChart = () => {
  const [filter, setFilter] = useState("monthly"); // Default: Bulanan
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCurrentRequest = true;

    const fetchStats = async () => {
      try {
        const response = await axios.get(
          apiUrl(`/api/v1/admin/inquiries/stats?filter=${filter}`),
          { withCredentials: true }
        );
        if (!isCurrentRequest) return;

        const data = response.data.data;
        setChartData({
          labels: data.map((item) => item.label),
          datasets: [
            {
              label: "Jumlah Kontak Masuk",
              data: data.map((item) => item.total),
              borderColor: "rgb(59, 130, 246)",
              backgroundColor: "rgba(59, 130, 246, 0.1)",
              fill: true,
              tension: 0.3,
            },
          ],
        });
      } catch (error) {
        if (isCurrentRequest) {
          console.error("Gagal mengambil data statistik:", error);
        }
      } finally {
        if (isCurrentRequest) setLoading(false);
      }
    };

    void fetchStats();
    return () => {
      isCurrentRequest = false;
    };
  }, [filter]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Pesan Masuk Kontak User",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1, // Memastikan skala Y selalu angka bulat
        },
      },
    },
  };

  return (
    <div style={{ padding: "20px", backgroundColor: "#fff", borderRadius: "8px" }}>
      {/* Tombol Filter */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button
          onClick={() => setFilter("weekly")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "weekly" ? "#2563eb" : "#e5e7eb",
            color: filter === "weekly" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Mingguan (7 Hari)
        </button>

        <button
          onClick={() => setFilter("monthly")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "monthly" ? "#2563eb" : "#e5e7eb",
            color: filter === "monthly" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Bulanan (30 Hari)
        </button>

        <button
          onClick={() => setFilter("yearly")}
          style={{
            padding: "8px 16px",
            backgroundColor: filter === "yearly" ? "#2563eb" : "#e5e7eb",
            color: filter === "yearly" ? "#fff" : "#000",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Tahunan (12 Bulan)
        </button>
      </div>

      {/* Tampilan Grafik / Loading */}
      {loading ? (
        <p>Memuat data grafik...</p>
      ) : (
        <Line options={options} data={chartData} />
      )}
    </div>
  );
};

export default ContactChart;