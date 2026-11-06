// Auto-generated dataset for Sandboxes Puzzle Visualizer
window.SANDBOX_DATA = {
  "meta": {
    "version": "1.0.0",
    "title": "Sandboxes Puzzle (\u0645\u0639\u0645\u0627\u06cc \u062c\u0639\u0628\u0647\u200c\u0647\u0627\u06cc \u0634\u0646)",
    "total_state_space_cardinality": 59049,
    "rows": 5,
    "cols": 2,
    "evaluation_time_sec": 0.635
  },
  "benchmark_summary": [
    {
      "algorithm": "BFS",
      "mean_time_ms": 422.77,
      "mean_peak_memory_mb": 2.2867,
      "mean_nodes_expanded": 3705.7,
      "mean_nodes_generated": 3746.1,
      "mean_cost": 55.0,
      "mean_length": 12.4,
      "optimality_rate": 90.0,
      "optimal": false
    },
    {
      "algorithm": "DFS",
      "mean_time_ms": 2.15,
      "mean_peak_memory_mb": 0.0426,
      "mean_nodes_expanded": 23.2,
      "mean_nodes_generated": 91.3,
      "mean_cost": 85.0,
      "mean_length": 23.2,
      "optimality_rate": 0.0,
      "optimal": false
    },
    {
      "algorithm": "UCS",
      "mean_time_ms": 491.53,
      "mean_peak_memory_mb": 2.4805,
      "mean_nodes_expanded": 3764.6,
      "mean_nodes_generated": 4298.1,
      "mean_cost": 54.8,
      "mean_length": 12.6,
      "optimality_rate": 100.0,
      "optimal": true
    },
    {
      "algorithm": "IDS",
      "mean_time_ms": 4675.58,
      "mean_peak_memory_mb": 1.9408,
      "mean_nodes_expanded": 39709.8,
      "mean_nodes_generated": 51436.9,
      "mean_cost": 55.0,
      "mean_length": 7.4,
      "optimality_rate": 60.0,
      "optimal": false
    },
    {
      "algorithm": "Greedy",
      "mean_time_ms": 1.11,
      "mean_peak_memory_mb": 0.0203,
      "mean_nodes_expanded": 13.5,
      "mean_nodes_generated": 43.3,
      "mean_cost": 55.7,
      "mean_length": 13.5,
      "optimality_rate": 60.0,
      "optimal": false
    },
    {
      "algorithm": "A*",
      "mean_time_ms": 87.49,
      "mean_peak_memory_mb": 0.9992,
      "mean_nodes_expanded": 670.9,
      "mean_nodes_generated": 1307.3,
      "mean_cost": 54.8,
      "mean_length": 12.6,
      "optimality_rate": 100.0,
      "optimal": true
    },
    {
      "algorithm": "RBFS",
      "mean_time_ms": 875.3,
      "mean_peak_memory_mb": 0.0252,
      "mean_nodes_expanded": 9679.1,
      "mean_nodes_generated": 29083.5,
      "mean_cost": 54.8,
      "mean_length": 5.1,
      "optimality_rate": 50.0,
      "optimal": true
    }
  ],
  "state_space_analysis": {
    "mean_ratio": 1.037,
    "median_ratio": 1.031,
    "max_suboptimality": 1.174,
    "histogram": {
      "bins": [
        1.0,
        1.017,
        1.035,
        1.052,
        1.07,
        1.087,
        1.104,
        1.122,
        1.139,
        1.157,
        1.174
      ],
      "counts": [
        19171,
        12976,
        11210,
        6918,
        4017,
        2200,
        1339,
        787,
        356,
        74
      ]
    },
    "plot1_greedy_vs_opt": [
      {
        "greedy_cost": 37.0,
        "opt_cost": 37.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 47.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 34.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 52.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 40.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 29.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 97.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 47.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 37.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 60.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 110.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 26.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 38.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 50.0,
        "ratio": 1.14
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 71.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 55.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 62.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 72.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 67.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 78.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 87.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 35.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 39.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 86.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 108.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 91.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 30.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 64.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 53.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 62.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 42.0,
        "ratio": 1.095
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 53.0,
        "ratio": 1.094
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 89.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 75.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 92.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 124.0,
        "opt_cost": 124.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 50.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 77.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 86.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 97.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 67.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 51.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 61.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 21.0,
        "opt_cost": 21.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 38.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 56.0,
        "ratio": 1.107
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 45.0,
        "ratio": 1.133
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 79.0,
        "ratio": 1.114
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 90.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 48.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 95.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 42.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 53.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 92.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 48.0,
        "ratio": 1.125
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 57.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 92.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 62.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 86.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 47.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 44.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 55.0,
        "ratio": 1.145
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 64.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 60.0,
        "ratio": 1.15
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 71.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 84.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 93.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 74.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 92.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 104.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 56.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 101.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 28.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 59.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 94.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 79.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 64.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 99.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 110.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 34.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 58.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 102.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 61.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 73.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 108.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 96.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 87.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 96.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 130.0,
        "opt_cost": 130.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 71.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 42.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 65.0,
        "ratio": 1.123
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 87.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 70.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 27.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 59.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 50.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 85.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 54.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 90.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 101.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 122.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 29.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 39.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 45.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 79.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 68.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 113.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 68.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 104.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 52.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 76.0,
        "ratio": 1.079
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 65.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 76.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 98.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 91.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 104.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 111.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 43.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 47.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 82.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 100.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 82.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 105.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 116.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 105.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 67.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 76.0,
        "ratio": 1.092
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 113.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 115.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 50.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 36.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 45.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 58.0,
        "ratio": 1.138
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 68.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 74.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 96.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 18.0,
        "opt_cost": 18.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 65.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 51.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 69.0,
        "ratio": 1.072
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 101.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 28.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 46.0,
        "ratio": 1.109
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 55.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 37.0,
        "ratio": 1.135
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 60.0,
        "ratio": 1.15
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 69.0,
        "ratio": 1.101
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 105.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 65.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 75.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 112.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 43.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 67.0,
        "ratio": 1.119
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 76.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 53.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 80.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 87.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 98.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 34.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 70.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 40.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 74.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 87.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 73.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 108.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 108.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 71.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 113.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 32.0,
        "ratio": 1.125
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 43.0,
        "ratio": 1.116
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 65.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 47.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 114.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 41.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 51.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 73.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 54.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 77.0,
        "ratio": 1.13
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 85.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 69.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 79.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 102.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 39.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 76.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 39.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 57.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 45.0,
        "ratio": 1.133
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 80.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 90.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 49.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 102.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 42.0,
        "ratio": 1.143
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 52.0,
        "ratio": 1.154
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 88.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 58.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 67.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 110.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 80.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 116.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 64.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 44.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 56.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 64.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 61.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 72.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 84.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 92.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 74.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 71.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 84.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 105.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 67.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 55.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 89.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 45.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 77.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 114.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 97.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 121.0,
        "opt_cost": 117.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 129.0,
        "opt_cost": 128.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 25.0,
        "opt_cost": 25.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 49.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 58.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 51.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 70.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 51.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 87.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 84.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 121.0,
        "opt_cost": 120.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 59.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 82.0,
        "ratio": 1.11
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 91.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 105.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 98.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 78.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 26.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 58.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 76.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 50.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 86.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 95.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 55.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 89.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 102.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 87.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 125.0,
        "opt_cost": 121.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 47.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 56.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 86.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 95.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 131.0,
        "opt_cost": 130.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 92.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 52.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 83.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 64.0,
        "ratio": 1.109
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 77.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 87.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 98.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 80.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 92.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 103.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 112.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 108.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 61.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 104.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 100.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 111.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 42.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 78.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 47.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 82.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 32.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 41.0,
        "ratio": 1.073
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 48.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 45.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 55.0,
        "ratio": 1.127
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 92.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 58.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 77.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 110.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 62.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 46.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 57.0,
        "ratio": 1.14
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 79.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 85.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 96.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 20.0,
        "opt_cost": 20.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 52.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 86.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 70.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 59.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 94.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 103.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 46.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 115.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 56.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 100.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 60.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 110.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 82.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 44.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 57.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 68.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 77.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 71.0,
        "ratio": 1.099
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 84.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 97.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 104.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 115.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 24.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 59.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 29.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 64.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 76.0,
        "ratio": 1.079
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 80.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 52.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 86.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 38.0,
        "ratio": 1.079
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 61.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 49.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 60.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 96.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 66.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 98.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 131.0,
        "opt_cost": 131.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 40.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 51.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 62.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 55.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 68.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 78.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 84.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 78.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 90.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 101.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 39.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 86.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 57.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 98.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 107.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 103.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 114.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 42.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 53.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 92.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 65.0,
        "ratio": 1.108
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 110.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 80.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 115.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 61.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 79.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 111.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 91.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 56.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 35.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 82.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 101.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 86.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 107.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 117.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 42.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 109.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 68.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 80.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 115.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 52.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 86.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 75.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 118.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 83.0,
        "ratio": 1.12
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 106.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 99.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 106.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 43.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 90.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 76.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 112.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 94.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 51.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 85.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 54.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 90.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 101.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 122.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 57.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 61.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 97.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 84.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 95.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 131.0,
        "opt_cost": 130.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 120.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 109.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 69.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 53.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 37.0,
        "ratio": 1.135
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 48.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 60.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 71.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 52.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 83.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 81.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 45.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 33.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 68.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 36.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 45.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 79.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 39.0,
        "ratio": 1.154
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 50.0,
        "ratio": 1.14
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 72.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 55.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 72.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 107.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 48.0,
        "ratio": 1.125
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 59.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 82.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 64.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 59.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 70.0,
        "ratio": 1.114
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 92.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 86.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 98.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 109.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 13.0,
        "opt_cost": 13.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 49.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 60.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 47.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 65.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 53.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 41.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 110.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 51.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 59.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 96.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 50.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 73.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 116.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 123.0,
        "opt_cost": 123.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 68.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 28.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 42.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 52.0,
        "ratio": 1.154
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 73.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 57.0,
        "ratio": 1.105
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 74.0,
        "ratio": 1.108
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 70.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 82.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 65.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 71.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 41.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 88.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 110.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 48.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 82.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 94.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 32.0,
        "ratio": 1.125
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 65.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 99.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 45.0,
        "ratio": 1.133
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 55.0,
        "ratio": 1.145
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 77.0,
        "ratio": 1.104
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 59.0,
        "ratio": 1.102
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 94.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 129.0,
        "opt_cost": 127.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 86.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 67.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 81.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 90.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 101.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 80.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 73.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 85.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 97.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 33.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 69.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 80.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 51.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 69.0,
        "ratio": 1.087
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 57.0,
        "ratio": 1.123
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 92.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 103.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 108.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 78.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 115.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 54.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 65.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 100.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 70.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 105.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 51.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 57.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 65.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 100.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 88.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 48.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 47.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 58.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 80.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 63.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 94.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 77.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 91.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 29.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 76.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 68.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 102.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 114.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 37.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 61.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 69.0,
        "ratio": 1.072
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 105.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 82.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 99.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 88.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 133.0,
        "opt_cost": 131.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 74.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 78.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 83.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 101.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 40.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 87.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 72.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 106.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 106.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 103.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 114.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 98.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 135.0,
        "opt_cost": 135.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 21.0,
        "opt_cost": 20.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 33.0,
        "opt_cost": 29.0,
        "ratio": 1.138
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 52.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 35.0,
        "ratio": 1.114
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 58.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 48.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 57.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 94.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 42.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 54.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 66.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 74.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 71.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 56.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 79.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 89.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 69.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 94.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 101.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 81.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 45.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 33.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 67.0,
        "ratio": 1.09
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 55.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 90.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 60.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 95.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 106.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 44.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 63.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 96.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 57.0,
        "ratio": 1.105
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 67.0,
        "ratio": 1.119
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 104.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 89.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 73.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 106.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 72.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 106.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 48.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 61.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 70.0,
        "ratio": 1.129
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 81.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 78.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 97.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 109.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 31.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 78.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 101.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 71.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 106.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 114.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 31.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 67.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 64.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 100.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 41.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 49.0,
        "ratio": 1.102
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 86.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 58.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 40.0,
        "ratio": 1.125
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 63.0,
        "ratio": 1.143
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 72.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 107.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 77.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 114.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 86.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 46.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 59.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 70.0,
        "ratio": 1.114
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 76.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 75.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 82.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 37.0,
        "ratio": 1.135
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 72.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 42.0,
        "ratio": 1.143
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 77.0,
        "ratio": 1.104
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 89.0,
        "ratio": 1.101
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 111.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 99.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 111.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 51.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 83.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 116.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 44.0,
        "ratio": 1.114
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 56.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 91.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 78.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 92.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 127.0,
        "opt_cost": 126.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 54.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 64.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 85.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 67.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 90.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 98.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 115.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 51.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 41.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 59.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 49.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 82.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 92.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 51.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 88.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 104.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 46.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 56.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 92.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 96.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 112.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 74.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 82.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 118.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 106.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 46.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 58.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 66.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 64.0,
        "ratio": 1.094
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 96.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 76.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 86.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 108.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 71.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 57.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 93.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 47.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 94.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 116.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 86.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 124.0,
        "opt_cost": 119.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 132.0,
        "opt_cost": 131.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 38.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 71.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 71.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 105.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 111.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 64.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 134.0,
        "opt_cost": 133.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 96.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 104.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 118.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 111.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 67.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 17.0,
        "opt_cost": 17.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 53.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 64.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 48.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 84.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 41.0,
        "ratio": 1.073
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 76.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 45.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 76.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 111.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 38.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 46.0,
        "ratio": 1.087
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 83.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 120.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 49.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 57.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 41.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 54.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 67.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 74.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 72.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 55.0,
        "ratio": 1.127
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 78.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 87.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 94.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 102.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 99.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 62.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 51.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 84.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 95.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 56.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 101.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 44.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 96.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 58.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 67.0,
        "ratio": 1.119
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 104.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 89.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 106.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 123.0,
        "opt_cost": 123.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 75.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 88.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 98.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 50.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 59.0,
        "ratio": 1.153
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 81.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 87.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 23.0,
        "opt_cost": 21.0,
        "ratio": 1.095
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 56.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 68.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 55.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 73.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 61.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 96.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 104.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 85.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 118.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 58.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 66.0,
        "ratio": 1.076
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 103.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 40.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 63.0,
        "ratio": 1.127
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 107.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 69.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 47.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 59.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 71.0,
        "ratio": 1.127
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 92.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 75.0,
        "ratio": 1.107
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 87.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 93.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 74.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 99.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 106.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 119.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 84.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 37.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 71.0,
        "ratio": 1.07
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 41.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 88.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 110.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 99.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 110.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 50.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 81.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 116.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 61.0,
        "ratio": 1.082
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 73.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 108.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 95.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 112.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 100.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 110.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 144.0,
        "opt_cost": 143.0,
        "ratio": 1.007
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 44.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 53.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 65.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 56.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 79.0,
        "ratio": 1.101
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 71.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 105.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 42.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 66.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 99.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 110.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 105.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 115.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 69.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 105.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 45.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 54.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 79.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 96.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 68.0,
        "ratio": 1.103
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 83.0,
        "ratio": 1.072
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 120.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 106.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 64.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 75.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 96.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 81.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 91.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 104.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 113.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 91.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 114.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 124.0,
        "opt_cost": 120.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 132.0,
        "opt_cost": 130.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 88.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 79.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 122.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 81.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 130.0,
        "opt_cost": 128.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 53.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 37.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 104.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 45.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 51.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 45.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 68.0,
        "ratio": 1.132
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 77.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 90.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 29.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 97.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 36.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 69.0,
        "ratio": 1.087
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 38.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 75.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 85.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 71.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 107.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 33.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 43.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 79.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 65.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 47.0,
        "ratio": 1.128
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 70.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 116.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 61.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 105.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 93.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 53.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 86.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 50.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 83.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 64.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 57.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 45.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 80.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 90.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 50.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 85.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 97.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 102.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 107.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 119.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 57.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 39.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 46.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 43.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 52.0,
        "ratio": 1.135
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 91.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 65.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 108.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 50.0,
        "ratio": 1.12
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 60.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 72.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 65.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 72.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 94.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 101.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 111.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 17.0,
        "opt_cost": 17.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 52.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 64.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 49.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 84.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 67.0,
        "ratio": 1.09
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 57.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 91.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 100.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 44.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 91.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 112.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 54.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 62.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 70.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 54.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 87.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 77.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 86.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 123.0,
        "opt_cost": 120.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 81.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 90.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 127.0,
        "opt_cost": 126.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 80.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 41.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 65.0,
        "ratio": 1.108
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 86.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 69.0,
        "ratio": 1.087
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 87.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 82.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 95.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 102.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 51.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 84.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 91.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 101.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 87.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 125.0,
        "opt_cost": 123.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 105.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 35.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 69.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 58.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 47.0,
        "ratio": 1.085
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 58.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 94.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 80.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 97.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 86.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 129.0,
        "opt_cost": 129.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 55.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 77.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 91.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 102.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 66.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 75.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 36.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 72.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 89.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 60.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 96.0,
        "ratio": 1.073
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 105.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 99.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 112.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 81.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 117.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 66.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 91.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 108.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 69.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 77.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 112.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 59.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 70.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 79.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 92.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 75.0,
        "ratio": 1.093
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 87.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 106.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 98.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 105.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 119.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 103.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 115.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 20.0,
        "opt_cost": 19.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 55.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 51.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 71.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 91.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 26.0,
        "ratio": 1.115
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 62.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 50.0,
        "ratio": 1.12
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 59.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 55.0,
        "ratio": 1.073
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 66.0,
        "ratio": 1.076
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 102.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 71.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 88.0,
        "opt_cost": 88.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 121.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 53.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 44.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 56.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 67.0,
        "ratio": 1.149
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 76.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 90.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 91.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 30.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 64.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 96.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 80.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 87.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 96.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 56.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 93.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 103.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 88.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 126.0,
        "opt_cost": 125.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 33.0,
        "opt_cost": 33.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 41.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 64.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 48.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 71.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 115.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 70.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 94.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 55.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 67.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 78.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 87.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 83.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 68.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 78.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 91.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 101.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 106.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 113.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 35.0,
        "ratio": 1.086
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 70.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 80.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 40.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 76.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 87.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 57.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 93.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 76.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 63.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 97.0,
        "ratio": 1.072
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 109.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 47.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 57.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 99.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 60.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 70.0,
        "ratio": 1.1
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 107.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 76.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 109.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 110.0,
        "opt_cost": 109.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 50.0,
        "ratio": 1.12
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 72.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 65.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 62.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 72.0,
        "ratio": 1.153
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 82.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 94.0,
        "ratio": 1.064
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 79.0,
        "ratio": 1.076
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 88.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 100.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 111.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 34.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 71.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 81.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 67.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 104.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 85.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 108.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 117.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 44.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 91.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 53.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 62.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 99.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 71.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 53.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 76.0,
        "ratio": 1.105
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 85.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 124.0,
        "opt_cost": 119.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 89.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 128.0,
        "opt_cost": 126.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 98.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 59.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 73.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 83.0,
        "ratio": 1.084
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 93.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 104.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 89.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 71.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 84.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 103.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 39.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 75.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 45.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 79.0,
        "ratio": 1.076
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 92.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 78.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 113.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 95.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 101.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 113.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 53.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 86.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 76.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 118.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 46.0,
        "ratio": 1.109
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 57.0,
        "ratio": 1.105
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 93.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 79.0,
        "ratio": 1.076
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 63.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 96.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 85.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 95.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 129.0,
        "opt_cost": 128.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 55.0,
        "ratio": 1.091
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 67.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 77.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 87.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 70.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 83.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 93.0,
        "ratio": 1.097
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 105.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 116.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 53.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 90.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 100.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 53.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 71.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 61.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 94.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 105.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 100.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 110.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 119.0,
        "opt_cost": 116.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 58.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 68.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 104.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 73.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 108.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 81.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 125.0,
        "opt_cost": 125.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 87.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 132.0,
        "opt_cost": 130.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 118.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 35.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 48.0,
        "ratio": 1.083
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 69.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 53.0,
        "ratio": 1.094
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 63.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 75.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 85.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 64.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 75.0,
        "ratio": 1.08
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 84.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 97.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 60.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 46.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 82.0,
        "ratio": 1.049
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 92.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 37.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 83.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 105.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 108.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 120.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 28.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 61.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 51.0,
        "ratio": 1.078
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 93.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 54.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 66.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 101.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 54.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 90.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 79.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 86.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 124.0,
        "opt_cost": 122.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 64.0,
        "ratio": 1.047
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 74.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 81.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 61.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 74.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 84.0,
        "ratio": 1.119
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 94.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 108.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 91.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 100.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 90.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 29.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 76.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 97.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 53.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 93.0,
        "opt_cost": 88.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 97.0,
        "ratio": 1.041
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 57.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 92.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 104.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 126.0,
        "opt_cost": 123.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 58.0,
        "ratio": 1.069
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 81.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 65.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 98.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 97.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 132.0,
        "opt_cost": 132.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 50.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 59.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 96.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 84.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 56.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 68.0,
        "ratio": 1.074
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 76.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 73.0,
        "ratio": 1.027
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 57.0,
        "ratio": 1.123
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 68.0,
        "ratio": 1.059
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 80.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 91.0,
        "ratio": 1.077
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 72.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 83.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 96.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 105.0,
        "opt_cost": 103.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 101.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 65.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 54.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 100.0,
        "opt_cost": 97.0,
        "ratio": 1.031
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 57.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 93.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 104.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 57.0,
        "ratio": 1.035
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 92.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 76.0,
        "ratio": 1.013
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 62.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 103.0,
        "opt_cost": 97.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 108.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 47.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 56.0,
        "ratio": 1.089
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 65.0,
        "ratio": 1.046
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 59.0,
        "ratio": 1.136
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 70.0,
        "ratio": 1.129
      },
      {
        "greedy_cost": 112.0,
        "opt_cost": 106.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 92.0,
        "ratio": 1.065
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 109.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 93.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 127.0,
        "opt_cost": 127.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 69.0,
        "ratio": 1.058
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 79.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 91.0,
        "ratio": 1.011
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 102.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 83.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 63.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 72.0,
        "ratio": 1.111
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 94.0,
        "ratio": 1.032
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 90.0,
        "opt_cost": 88.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 99.0,
        "ratio": 1.02
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 111.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 33.0,
        "ratio": 1.061
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 69.0,
        "ratio": 1.043
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 80.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 67.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 85.0,
        "ratio": 1.071
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 73.0,
        "ratio": 1.055
      },
      {
        "greedy_cost": 114.0,
        "opt_cost": 108.0,
        "ratio": 1.056
      },
      {
        "greedy_cost": 122.0,
        "opt_cost": 116.0,
        "ratio": 1.052
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 61.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 98.0,
        "opt_cost": 98.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 108.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 95.0,
        "opt_cost": 95.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 132.0,
        "opt_cost": 131.0,
        "ratio": 1.008
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 70.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 79.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 116.0,
        "opt_cost": 116.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 60.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 43.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 77.0,
        "opt_cost": 77.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 65.0,
        "ratio": 1.092
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 75.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 111.0,
        "opt_cost": 108.0,
        "ratio": 1.028
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 78.0,
        "ratio": 1.051
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 115.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 87.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 49.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 62.0,
        "ratio": 1.016
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 73.0,
        "ratio": 1.096
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 82.0,
        "ratio": 1.012
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 83.0,
        "opt_cost": 76.0,
        "ratio": 1.092
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 89.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 85.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 95.0,
        "ratio": 1.042
      },
      {
        "greedy_cost": 75.0,
        "opt_cost": 75.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 89.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 102.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 109.0,
        "opt_cost": 109.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 120.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 85.0,
        "opt_cost": 85.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 41.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 74.0,
        "ratio": 1.054
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 84.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 44.0,
        "ratio": 1.068
      },
      {
        "greedy_cost": 84.0,
        "opt_cost": 80.0,
        "ratio": 1.05
      },
      {
        "greedy_cost": 97.0,
        "opt_cost": 91.0,
        "ratio": 1.066
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 96.0,
        "opt_cost": 96.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 103.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 51.0,
        "ratio": 1.098
      },
      {
        "greedy_cost": 89.0,
        "opt_cost": 87.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 77.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 87.0,
        "opt_cost": 84.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 120.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 64.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 74.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 111.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 96.0,
        "ratio": 1.062
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 80.0,
        "ratio": 1.025
      },
      {
        "greedy_cost": 115.0,
        "opt_cost": 113.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 106.0,
        "opt_cost": 103.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 113.0,
        "opt_cost": 112.0,
        "ratio": 1.009
      },
      {
        "greedy_cost": 146.0,
        "opt_cost": 146.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 56.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 65.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 79.0,
        "opt_cost": 77.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 68.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 82.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 99.0,
        "opt_cost": 91.0,
        "ratio": 1.088
      },
      {
        "greedy_cost": 102.0,
        "opt_cost": 102.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 101.0,
        "opt_cost": 100.0,
        "ratio": 1.01
      },
      {
        "greedy_cost": 86.0,
        "opt_cost": 83.0,
        "ratio": 1.036
      },
      {
        "greedy_cost": 94.0,
        "opt_cost": 94.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 108.0,
        "opt_cost": 105.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 120.0,
        "opt_cost": 117.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 54.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 91.0,
        "opt_cost": 88.0,
        "ratio": 1.034
      },
      {
        "greedy_cost": 104.0,
        "opt_cost": 101.0,
        "ratio": 1.03
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 70.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 107.0,
        "opt_cost": 107.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 92.0,
        "opt_cost": 88.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 81.0,
        "opt_cost": 78.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 118.0,
        "opt_cost": 111.0,
        "ratio": 1.063
      },
      {
        "greedy_cost": 126.0,
        "opt_cost": 122.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 80.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 117.0,
        "opt_cost": 117.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 130.0,
        "opt_cost": 127.0,
        "ratio": 1.024
      }
    ],
    "plot2_actions_vs_type_b": [
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 124.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 21.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 130.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 4,
        "type_b_actions": 0,
        "greedy_cost": 18.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 121.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 129.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 25.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 121.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 125.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 131.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 20.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 131.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 131.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 3,
        "type_b_actions": 0,
        "greedy_cost": 13.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 123.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 129.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 133.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 135.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 21.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 33.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 127.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 124.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 132.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 134.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 17.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 123.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 23.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 144.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 124.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 132.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 130.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 17.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 123.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 127.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 125.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 129.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 20.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 88.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 126.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 33.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 110.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 124.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 128.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 129.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 119.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 125.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 132.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 124.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 93.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 126.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 132.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 105.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 100.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 103.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 112.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 127.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 90.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 114.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 122.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 98.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 95.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 132.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 116.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 77.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 111.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 83.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 75.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 109.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 85.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 84.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 97.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 96.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 89.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 87.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 115.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 106.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 113.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 146.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 79.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 99.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 102.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 101.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 86.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 94.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 108.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 120.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 91.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 104.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 107.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 92.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 81.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 118.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 126.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 117.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 130.0
      }
    ]
  },
  "presets": {
    "professor_case": {
      "initial_state": [
        [
          1.0,
          0.0
        ],
        [
          0.0,
          1.0
        ],
        [
          0.0,
          1.0
        ],
        [
          1.0,
          0.0
        ]
      ],
      "traces": {
        "side_gate_45": {
          "algorithm": "Side-Gate (Cost 45)",
          "total_cost": 45.0,
          "path_length": 11,
          "nodes_expanded": 15,
          "nodes_generated": 42,
          "execution_time_ms": 1.25,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 6.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 11.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 16.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 19.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 22.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "alternative_46": {
          "algorithm": "Alternative (Cost 46)",
          "total_cost": 46.0,
          "path_length": 12,
          "nodes_expanded": 15,
          "nodes_generated": 42,
          "execution_time_ms": 1.25,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 2.0,
              "target": {
                "row": 1,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 7.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.5
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 13.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 21.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 26.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 31.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 36.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 41.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 46.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "greedy_47": {
          "algorithm": "Greedy (Cost 47)",
          "total_cost": 47.0,
          "path_length": 15,
          "nodes_expanded": 15,
          "nodes_generated": 42,
          "execution_time_ms": 1.25,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 2.0,
              "target": {
                "row": 1,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 3.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 6.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 9.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 12.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 18.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 21.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 24.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 29.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 13,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 39.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 14,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 44.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 15,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "optimal_ucs_50": {
          "algorithm": "UCS",
          "total_cost": 50.0,
          "path_length": 10,
          "nodes_expanded": 2068,
          "nodes_generated": 2377,
          "execution_time_ms": 193.329,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 50.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "astar_50": {
          "algorithm": "A*",
          "total_cost": 50.0,
          "path_length": 10,
          "nodes_expanded": 55,
          "nodes_generated": 126,
          "execution_time_ms": 4.662,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 50.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        }
      }
    },
    "sample_5row": {
      "initial_state": [
        [
          0.0,
          0.0
        ],
        [
          1.0,
          0.0
        ],
        [
          1.0,
          0.0
        ],
        [
          0.0,
          1.0
        ],
        [
          0.0,
          0.0
        ]
      ],
      "traces": {
        "bfs": {
          "algorithm": "BFS",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 848,
          "nodes_generated": 1061,
          "execution_time_ms": 79.915,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "dfs": {
          "algorithm": "DFS",
          "total_cost": 74.0,
          "path_length": 22,
          "nodes_expanded": 22,
          "nodes_generated": 82,
          "execution_time_ms": 2.401,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=3)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 3,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 2.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 3.0,
              "target": {
                "row": 1,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 6.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 9.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 7.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 7.0,
              "cum_cost": 23.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 28.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 29.0,
              "target": {
                "row": 1,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 30.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 3.0,
              "cum_cost": 33.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 36.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 13,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 7.0,
              "cum_cost": 43.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 14,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 7.0,
              "cum_cost": 50.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 15,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 55.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 16,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 56.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 17,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 59.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 18,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 62.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 19,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 67.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 20,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 68.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 21,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 71.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 22,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 74.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "ucs": {
          "algorithm": "UCS",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 1197,
          "nodes_generated": 1381,
          "execution_time_ms": 116.957,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "ids": {
          "algorithm": "IDS",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 4188,
          "nodes_generated": 6560,
          "execution_time_ms": 377.832,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "greedy": {
          "algorithm": "Greedy",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 9,
          "nodes_generated": 32,
          "execution_time_ms": 0.842,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "astar": {
          "algorithm": "A*",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 34,
          "nodes_generated": 81,
          "execution_time_ms": 3.013,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "rbfs": {
          "algorithm": "RBFS",
          "total_cost": 45.0,
          "path_length": 9,
          "nodes_expanded": 9,
          "nodes_generated": 32,
          "execution_time_ms": 0.87,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 35.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 45.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        }
      }
    },
    "side_gate_trap": {
      "initial_state": [
        [
          1.0,
          0.0
        ],
        [
          0.0,
          1.0
        ],
        [
          1.0,
          0.0
        ],
        [
          0.5,
          0.5
        ]
      ],
      "traces": {
        "bfs": {
          "algorithm": "BFS",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 1718,
          "nodes_generated": 1739,
          "execution_time_ms": 133.497,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 19.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 24.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 29.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 37.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 42.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 52.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "dfs": {
          "algorithm": "DFS",
          "total_cost": 87.0,
          "path_length": 23,
          "nodes_expanded": 23,
          "nodes_generated": 93,
          "execution_time_ms": 2.094,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 2.0,
              "target": {
                "row": 1,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 3.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 6.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 9.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 7.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 7.0,
              "cum_cost": 23.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 7.0,
              "cum_cost": 30.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 3.0,
              "cum_cost": 33.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 7.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 43.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 48.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 13,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 49.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 14,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 7.0,
              "cum_cost": 56.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 15,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 7.0,
              "cum_cost": 63.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 16,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 68.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 17,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 69.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 18,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 72.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 19,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 75.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 20,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 80.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 21,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 81.0,
              "target": {
                "row": 0,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 22,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 84.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 23,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 87.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "ucs": {
          "algorithm": "UCS",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 1742,
          "nodes_generated": 1999,
          "execution_time_ms": 193.783,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 4.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 7.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 12.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 17.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 22.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 27.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 32.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 37.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 42.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 52.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "ids": {
          "algorithm": "IDS",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 16598,
          "nodes_generated": 21874,
          "execution_time_ms": 1348.133,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 1.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 4.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.5,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 7.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 12.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 17.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 22.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 27.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 32.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 37.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 42.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 52.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "greedy": {
          "algorithm": "Greedy",
          "total_cost": 54.0,
          "path_length": 14,
          "nodes_expanded": 14,
          "nodes_generated": 41,
          "execution_time_ms": 0.966,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 20.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 25.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 30.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 33.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 3.0,
              "cum_cost": 36.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 3.0,
              "cum_cost": 39.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 3.0,
              "cum_cost": 42.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 45.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 3.0,
              "cum_cost": 48.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 13,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 51.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 14,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 54.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "astar": {
          "algorithm": "A*",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 384,
          "nodes_generated": 688,
          "execution_time_ms": 34.674,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 19.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 24.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 29.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 37.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 42.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 52.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        },
        "rbfs": {
          "algorithm": "RBFS",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 42606,
          "nodes_generated": 117612,
          "execution_time_ms": 3131.778,
          "steps": [
            {
              "step": 0,
              "action_type": "INITIAL",
              "description": "Initial puzzle configuration",
              "cost": 0.0,
              "cum_cost": 0.0,
              "target": null,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 1,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 10.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 15.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 4,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=2)",
              "cost": 1.0,
              "cum_cost": 16.0,
              "target": {
                "row": 2,
                "col": null
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.5,
                  0.5
                ],
                [
                  0.5,
                  0.5
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 3.0,
              "cum_cost": 19.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 24.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 5.0,
              "cum_cost": 29.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  1.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 8,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 0,
                "col": 0
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.5
                ],
                [
                  0.0,
                  0.5
                ]
              ]
            },
            {
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 37.0,
              "target": {
                "row": 3,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 10,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 42.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 47.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  1.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 12,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 52.0,
              "target": {
                "row": 0,
                "col": 1
              },
              "delta_s": 1.0,
              "state": [
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ],
                [
                  0.0,
                  0.0
                ]
              ]
            }
          ]
        }
      }
    }
  }
};
