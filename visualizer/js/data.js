// Auto-generated dataset for Sandboxes Puzzle Visualizer
window.SANDBOX_DATA = {
  "meta": {
    "version": "1.0.0",
    "title": "Sandboxes Puzzle (\u0645\u0639\u0645\u0627\u06cc \u062c\u0639\u0628\u0647\u200c\u0647\u0627\u06cc \u0634\u0646)",
    "total_state_space_cardinality": 59049,
    "rows": 5,
    "cols": 2,
    "evaluation_time_sec": 0.492
  },
  "benchmark_summary": [
    {
      "algorithm": "BFS",
      "mean_time_ms": 1017.02,
      "mean_peak_memory_mb": 2.3031,
      "mean_nodes_expanded": 3705.7,
      "mean_nodes_generated": 3746.1,
      "mean_cost": 55.0,
      "mean_length": 12.4,
      "optimality_rate": 90.0,
      "optimal": false
    },
    {
      "algorithm": "DFS",
      "mean_time_ms": 8.09,
      "mean_peak_memory_mb": 0.0433,
      "mean_nodes_expanded": 23.2,
      "mean_nodes_generated": 91.3,
      "mean_cost": 85.0,
      "mean_length": 23.2,
      "optimality_rate": 0.0,
      "optimal": false
    },
    {
      "algorithm": "UCS",
      "mean_time_ms": 1708.7,
      "mean_peak_memory_mb": 2.4908,
      "mean_nodes_expanded": 3764.6,
      "mean_nodes_generated": 4298.1,
      "mean_cost": 54.8,
      "mean_length": 12.6,
      "optimality_rate": 100.0,
      "optimal": true
    },
    {
      "algorithm": "IDS",
      "mean_time_ms": 11710.45,
      "mean_peak_memory_mb": 1.9556,
      "mean_nodes_expanded": 39709.8,
      "mean_nodes_generated": 51436.9,
      "mean_cost": 55.0,
      "mean_length": 7.4,
      "optimality_rate": 60.0,
      "optimal": false
    },
    {
      "algorithm": "GreedyStar",
      "mean_time_ms": 0.19,
      "mean_peak_memory_mb": 0.0037,
      "mean_nodes_expanded": 7.7,
      "mean_nodes_generated": 8.7,
      "mean_cost": 47.1,
      "mean_length": 7.7,
      "optimality_rate": 0.0,
      "optimal": false
    },
    {
      "algorithm": "A*",
      "mean_time_ms": 97.04,
      "mean_peak_memory_mb": 1.0098,
      "mean_nodes_expanded": 670.9,
      "mean_nodes_generated": 1307.3,
      "mean_cost": 54.8,
      "mean_length": 12.6,
      "optimality_rate": 100.0,
      "optimal": true
    },
    {
      "algorithm": "RBFS",
      "mean_time_ms": 953.51,
      "mean_peak_memory_mb": 0.0257,
      "mean_nodes_expanded": 9679.1,
      "mean_nodes_generated": 29083.5,
      "mean_cost": 54.8,
      "mean_length": 5.1,
      "optimality_rate": 50.0,
      "optimal": true
    }
  ],
  "state_space_analysis": {
    "mean_ratio": 0.814,
    "median_ratio": 0.809,
    "max_suboptimality": 1.106,
    "histogram": {
      "bins": [
        0.547,
        0.603,
        0.659,
        0.715,
        0.771,
        0.827,
        0.882,
        0.938,
        0.994,
        1.05,
        1.106
      ],
      "counts": [
        254,
        2497,
        7403,
        11026,
        12188,
        10605,
        7579,
        5384,
        1970,
        142
      ]
    },
    "plot1_greedy_vs_opt": [
      {
        "greedy_cost": 37.0,
        "opt_cost": 37.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 47.0,
        "ratio": 1.106
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 34.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 70.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 52.0,
        "ratio": 1.019
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 40.0,
        "ratio": 1.075
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 75.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 83.0,
        "ratio": 0.916
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 29.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 76.0,
        "ratio": 0.974
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 62.0,
        "ratio": 1.048
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 97.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 38.0,
        "ratio": 1.053
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 47.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 84.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 55.0,
        "ratio": 0.945
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 37.0,
        "ratio": 1.081
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 72.0,
        "ratio": 0.986
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 60.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 70.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 103.0,
        "ratio": 0.777
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 65.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 73.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 66.0,
        "ratio": 0.939
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 26.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 38.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 58.0,
        "ratio": 0.931
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 71.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 55.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 66.0,
        "ratio": 0.985
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 62.0,
        "ratio": 0.968
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 72.0,
        "ratio": 0.944
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 55.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 67.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 78.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 87.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 100.0,
        "ratio": 0.76
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 63.0,
        "ratio": 0.968
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 35.0,
        "ratio": 1.057
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 69.0,
        "ratio": 0.957
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 79.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 39.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 75.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 86.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 73.0,
        "ratio": 0.89
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 108.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 91.0,
        "ratio": 0.758
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 45.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 90.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 30.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 53.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 62.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 95.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 42.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 53.0,
        "ratio": 1.038
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 89.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 75.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 57.0,
        "ratio": 0.842
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 92.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 81.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 88.0,
        "ratio": 0.807
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 124.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 50.0,
        "ratio": 1.06
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 60.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 72.0,
        "ratio": 0.917
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 83.0,
        "ratio": 0.819
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 63.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 77.0,
        "ratio": 0.701
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 86.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 97.0,
        "ratio": 0.711
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 67.0,
        "ratio": 1.045
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 51.0,
        "ratio": 1.039
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 61.0,
        "ratio": 0.934
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 73.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 85.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 21.0,
        "opt_cost": 21.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 56.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 38.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 74.0,
        "ratio": 0.865
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 56.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 79.0,
        "ratio": 0.911
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 90.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 48.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 84.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 95.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 66.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 103.0,
        "ratio": 0.777
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 42.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 53.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 88.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 75.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 58.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 92.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 48.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 57.0,
        "ratio": 0.965
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 92.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 53.0,
        "ratio": 0.811
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 62.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 99.0,
        "ratio": 0.788
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 47.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 44.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 55.0,
        "ratio": 0.945
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 64.0,
        "ratio": 0.734
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 76.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 60.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 71.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 84.0,
        "ratio": 0.786
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 93.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 74.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 72.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 84.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 92.0,
        "ratio": 0.728
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 104.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 68.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 56.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 90.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 28.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 63.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 74.0,
        "ratio": 0.919
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 59.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 94.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 79.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 64.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 99.0,
        "ratio": 0.707
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 34.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 68.0,
        "ratio": 0.926
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 58.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 68.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 102.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 61.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 73.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 108.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 79.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 63.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 96.0,
        "ratio": 0.76
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 87.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 96.0,
        "ratio": 0.719
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 130.0,
        "ratio": 0.631
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 71.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 81.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 60.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 42.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 53.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 65.0,
        "ratio": 0.985
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 73.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 87.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 70.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 80.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 76.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 88.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 27.0,
        "ratio": 1.037
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 62.0,
        "ratio": 0.984
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 59.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 93.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 77.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 50.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 85.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 93.0,
        "ratio": 0.688
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 54.0,
        "ratio": 0.981
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 90.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 101.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 85.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 122.0,
        "ratio": 0.656
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 29.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 39.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 75.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 62.0,
        "ratio": 0.968
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 45.0,
        "ratio": 1.022
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 79.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 68.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 78.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 113.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 58.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 68.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 104.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 90.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 52.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 65.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 76.0,
        "ratio": 0.842
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 85.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 81.0,
        "ratio": 0.84
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 65.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 76.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 88.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 98.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 78.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 91.0,
        "ratio": 0.703
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 104.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 111.0,
        "ratio": 0.658
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 90.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 55.0,
        "ratio": 0.964
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 43.0,
        "ratio": 1.023
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 77.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 86.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 47.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 82.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 93.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 65.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 100.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 82.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 70.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 105.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 116.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 53.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 89.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 63.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 72.0,
        "ratio": 0.681
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 105.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 67.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 76.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 113.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 98.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 82.0,
        "ratio": 0.732
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 115.0,
        "ratio": 0.635
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 50.0,
        "ratio": 1.04
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 60.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 93.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 36.0,
        "ratio": 0.972
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 45.0,
        "ratio": 1.067
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 68.0,
        "ratio": 1.029
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 50.0,
        "ratio": 0.96
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 48.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 58.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 68.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 80.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 74.0,
        "ratio": 0.905
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 84.0,
        "ratio": 0.738
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
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
        "greedy_cost": 54.0,
        "opt_cost": 65.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 51.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 88.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 69.0,
        "ratio": 0.942
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 58.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 93.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 28.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 65.0,
        "ratio": 0.815
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 75.0,
        "ratio": 0.987
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 61.0,
        "ratio": 0.902
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 98.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 38.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 46.0,
        "ratio": 0.957
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 83.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 55.0,
        "ratio": 1.018
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 37.0,
        "ratio": 0.973
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 73.0,
        "ratio": 0.945
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 60.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 69.0,
        "ratio": 0.913
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 105.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 65.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 75.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 112.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 83.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 43.0,
        "ratio": 0.93
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 56.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 67.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 76.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 88.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 73.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 83.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 63.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 73.0,
        "ratio": 0.959
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 53.0,
        "ratio": 0.906
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 67.0,
        "ratio": 0.612
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 80.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 87.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 98.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 63.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 33.0,
        "opt_cost": 34.0,
        "ratio": 0.971
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 70.0,
        "ratio": 0.943
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 80.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 40.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 74.0,
        "ratio": 0.77
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 87.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 73.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 108.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 90.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 108.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 48.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 82.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 71.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 80.0,
        "ratio": 0.775
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 32.0,
        "ratio": 0.969
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 43.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 79.0,
        "ratio": 0.962
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 65.0,
        "ratio": 0.985
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 47.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 82.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 71.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 79.0,
        "ratio": 0.899
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 114.0,
        "ratio": 0.719
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 41.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 51.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 63.0,
        "ratio": 0.984
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 73.0,
        "ratio": 0.849
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 54.0,
        "ratio": 0.926
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 68.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 77.0,
        "ratio": 0.883
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 88.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 85.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 69.0,
        "ratio": 0.942
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 79.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 91.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 102.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 39.0,
        "ratio": 0.974
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 76.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 39.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 74.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 57.0,
        "ratio": 0.965
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 45.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 90.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 49.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 84.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 96.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 66.0,
        "ratio": 0.924
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 102.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 42.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 52.0,
        "ratio": 0.923
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 88.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 76.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 93.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 76.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 110.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 71.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 80.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 116.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 64.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 44.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 56.0,
        "ratio": 0.964
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 64.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 78.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 61.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 72.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 84.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 92.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 71.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 84.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 91.0,
        "ratio": 0.758
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 105.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 55.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 89.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 45.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 81.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 92.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 77.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 114.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 97.0,
        "ratio": 0.711
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 84.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 117.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 128.0,
        "ratio": 0.609
      },
      {
        "greedy_cost": 25.0,
        "opt_cost": 25.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 58.0,
        "ratio": 0.948
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 49.0,
        "ratio": 0.98
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 58.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 91.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 51.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 98.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 70.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 51.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 87.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 77.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 84.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 120.0,
        "ratio": 0.683
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 61.0,
        "ratio": 0.934
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 72.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 68.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 78.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 59.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 71.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 82.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 91.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 105.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 88.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 98.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 78.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 88.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 25.0,
        "opt_cost": 26.0,
        "ratio": 0.962
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 63.0,
        "ratio": 0.905
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 58.0,
        "ratio": 0.931
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 95.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 76.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 50.0,
        "ratio": 0.94
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 86.0,
        "ratio": 0.837
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 95.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 89.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 102.0,
        "ratio": 0.725
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 87.0,
        "ratio": 0.77
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 121.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 47.0,
        "ratio": 0.936
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 56.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 93.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 79.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 63.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 96.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 86.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 130.0,
        "ratio": 0.615
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 58.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 66.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 103.0,
        "ratio": 0.757
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 92.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 52.0,
        "ratio": 0.904
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 63.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 76.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 83.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 82.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 64.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 77.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 87.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 98.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 80.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 92.0,
        "ratio": 0.652
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 103.0,
        "ratio": 0.68
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 112.0,
        "ratio": 0.652
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 108.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 73.0,
        "ratio": 0.781
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 61.0,
        "ratio": 0.82
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 95.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 104.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 65.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 100.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 111.0,
        "ratio": 0.649
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 42.0,
        "ratio": 0.976
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 78.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 60.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 47.0,
        "ratio": 0.957
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 82.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 94.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 32.0,
        "ratio": 0.969
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 65.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 41.0,
        "ratio": 0.976
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 48.0,
        "ratio": 0.917
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 84.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 45.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 92.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 77.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 58.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 94.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 67.0,
        "ratio": 1.015
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 77.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 110.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 53.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 62.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 75.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 85.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 46.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 57.0,
        "ratio": 0.912
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 66.0,
        "ratio": 0.924
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 79.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 63.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 73.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 85.0,
        "ratio": 0.659
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 19.0,
        "opt_cost": 20.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 54.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 52.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 86.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 70.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 59.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 94.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 103.0,
        "ratio": 0.738
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 46.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 82.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 93.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 78.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 115.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 56.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 64.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 100.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 55.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 38.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 72.0,
        "ratio": 0.819
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 60.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 70.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 103.0,
        "ratio": 0.777
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 65.0,
        "ratio": 0.569
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 73.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 82.0,
        "ratio": 0.878
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 44.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 57.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 68.0,
        "ratio": 0.912
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 77.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 89.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 71.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 84.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 80.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 90.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 70.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 84.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 97.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 104.0,
        "ratio": 0.683
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 115.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 80.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 24.0,
        "opt_cost": 24.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 59.0,
        "ratio": 0.983
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 70.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 29.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 76.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 62.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 98.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 80.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 52.0,
        "ratio": 0.981
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 86.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 98.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 38.0,
        "ratio": 0.974
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 72.0,
        "ratio": 0.903
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 61.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 69.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 103.0,
        "ratio": 0.757
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 49.0,
        "ratio": 0.98
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 60.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 83.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 66.0,
        "ratio": 0.879
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 100.0,
        "ratio": 0.73
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 88.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 98.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 131.0,
        "ratio": 0.626
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 40.0,
        "ratio": 0.975
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 51.0,
        "ratio": 0.922
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 62.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 73.0,
        "ratio": 0.904
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 55.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 68.0,
        "ratio": 0.662
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 88.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 84.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 69.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 78.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 90.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 39.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 57.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 93.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 98.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 107.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 67.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 103.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 114.0,
        "ratio": 0.649
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 66.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 101.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 42.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 53.0,
        "ratio": 0.906
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 88.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 75.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 58.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 92.0,
        "ratio": 0.707
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 65.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 110.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 72.0,
        "ratio": 0.694
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 80.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 115.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 63.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 61.0,
        "ratio": 0.885
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 73.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 81.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 95.0,
        "ratio": 0.758
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 79.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 89.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 101.0,
        "ratio": 0.693
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 111.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 91.0,
        "ratio": 0.703
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 60.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 73.0,
        "ratio": 0.932
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 80.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 94.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 56.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 45.0,
        "ratio": 0.978
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 78.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 90.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 35.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 70.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 82.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 67.0,
        "ratio": 0.851
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 101.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 71.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 107.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 117.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 33.0,
        "opt_cost": 42.0,
        "ratio": 0.786
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 66.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 75.0,
        "ratio": 0.693
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 109.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 68.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 80.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 115.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 69.0,
        "ratio": 0.899
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 52.0,
        "ratio": 0.923
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 86.0,
        "ratio": 0.802
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 75.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 85.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 118.0,
        "ratio": 0.695
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 61.0,
        "ratio": 0.869
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 70.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 77.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 60.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 73.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 83.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 93.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 106.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 89.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 99.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 95.0,
        "ratio": 0.758
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 106.0,
        "ratio": 0.717
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 43.0,
        "ratio": 0.93
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 80.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 90.0,
        "ratio": 0.711
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 76.0,
        "ratio": 0.763
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 112.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 94.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 51.0,
        "ratio": 0.922
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 85.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 93.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 54.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 90.0,
        "ratio": 0.7
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 101.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 85.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 122.0,
        "ratio": 0.656
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 48.0,
        "ratio": 0.917
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 57.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 94.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 80.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 61.0,
        "ratio": 0.852
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 97.0,
        "ratio": 0.711
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 84.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 130.0,
        "ratio": 0.615
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 75.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 83.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 120.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 109.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 69.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 80.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 93.0,
        "ratio": 0.71
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 100.0,
        "ratio": 0.64
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 53.0,
        "ratio": 0.981
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 37.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 48.0,
        "ratio": 1.021
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 60.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 71.0,
        "ratio": 1.014
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 52.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 63.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 76.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 83.0,
        "ratio": 0.88
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 81.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 33.0,
        "ratio": 0.97
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 77.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 38.0,
        "ratio": 1.026
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 73.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 84.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 90.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 73.0,
        "ratio": 0.945
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 60.0,
        "ratio": 1.017
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 95.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 107.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 45.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 78.0,
        "ratio": 0.885
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 36.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 45.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 79.0,
        "ratio": 0.911
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 39.0,
        "ratio": 0.923
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 50.0,
        "ratio": 0.98
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 86.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 72.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 55.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 89.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 64.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 72.0,
        "ratio": 0.903
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 107.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 48.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 59.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 70.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 82.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 64.0,
        "ratio": 0.906
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 59.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 70.0,
        "ratio": 0.914
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 79.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 92.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 76.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 98.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 109.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 13.0,
        "opt_cost": 13.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 49.0,
        "ratio": 0.959
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 60.0,
        "ratio": 1.033
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 47.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 83.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 65.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 53.0,
        "ratio": 0.849
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 88.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 76.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 88.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 75.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 110.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 51.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 59.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 96.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 68.0,
        "ratio": 0.912
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 50.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 85.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 83.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 116.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 78.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 123.0,
        "ratio": 0.634
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 68.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 28.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 42.0,
        "ratio": 1.024
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 52.0,
        "ratio": 0.962
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 62.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 73.0,
        "ratio": 0.932
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 57.0,
        "ratio": 0.93
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 68.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 66.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 74.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 56.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 70.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 82.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 90.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 65.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 38.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 71.0,
        "ratio": 0.845
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 83.0,
        "ratio": 0.675
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 78.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 88.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 75.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 93.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 48.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 82.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 94.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 32.0,
        "ratio": 0.969
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 66.0,
        "ratio": 0.924
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 57.0,
        "ratio": 0.912
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 65.0,
        "ratio": 0.923
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 99.0,
        "ratio": 0.788
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 45.0,
        "ratio": 0.978
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 92.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 77.0,
        "ratio": 0.883
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 59.0,
        "ratio": 0.915
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 94.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 84.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 92.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 127.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 54.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 63.0,
        "ratio": 0.683
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 76.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 86.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 67.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 81.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 90.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 101.0,
        "ratio": 0.683
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 80.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 63.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 73.0,
        "ratio": 0.89
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 85.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 97.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 33.0,
        "ratio": 0.939
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 69.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 51.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 86.0,
        "ratio": 0.837
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 69.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 57.0,
        "ratio": 0.93
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 92.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 61.0,
        "ratio": 0.77
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 96.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 108.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 78.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 115.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 54.0,
        "ratio": 0.926
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 65.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 100.0,
        "ratio": 0.72
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 88.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 70.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 105.0,
        "ratio": 0.676
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 51.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 60.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 95.0,
        "ratio": 0.842
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 57.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 65.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 100.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 88.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 48.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 47.0,
        "ratio": 0.936
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 58.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 67.0,
        "ratio": 0.612
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 80.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 75.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 94.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 77.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 86.0,
        "ratio": 0.837
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 93.0,
        "ratio": 0.656
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 107.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 69.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 58.0,
        "ratio": 0.793
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 91.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 29.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 66.0,
        "ratio": 0.924
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 76.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 62.0,
        "ratio": 0.919
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 98.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 81.0,
        "ratio": 0.802
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 68.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 102.0,
        "ratio": 0.706
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 114.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 37.0,
        "ratio": 0.865
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 73.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 61.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 69.0,
        "ratio": 0.754
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 105.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 66.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 77.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 113.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 82.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 65.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 99.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 88.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 98.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 131.0,
        "ratio": 0.626
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 74.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 83.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 63.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 55.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 66.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 100.0,
        "ratio": 0.72
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 83.0,
        "ratio": 0.711
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 93.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 89.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 40.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 87.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 72.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 106.0,
        "ratio": 0.717
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 90.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 63.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 98.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 106.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 67.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 103.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 114.0,
        "ratio": 0.649
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 98.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 135.0,
        "ratio": 0.593
      },
      {
        "greedy_cost": 20.0,
        "opt_cost": 20.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 29.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 66.0,
        "ratio": 0.97
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 52.0,
        "ratio": 0.962
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 35.0,
        "ratio": 0.971
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 69.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 68.0,
        "ratio": 0.985
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 103.0,
        "ratio": 0.777
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 48.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 57.0,
        "ratio": 0.965
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 94.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 81.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 42.0,
        "ratio": 0.976
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 54.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 66.0,
        "ratio": 0.97
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 71.0,
        "ratio": 0.901
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 56.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 66.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 79.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 89.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 69.0,
        "ratio": 0.899
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 81.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 94.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 101.0,
        "ratio": 0.723
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 81.0,
        "ratio": 0.84
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 45.0,
        "ratio": 0.956
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 33.0,
        "ratio": 0.97
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 77.0,
        "ratio": 0.883
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 38.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 73.0,
        "ratio": 0.726
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 84.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 55.0,
        "ratio": 0.964
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 90.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 73.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 60.0,
        "ratio": 0.883
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 95.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 106.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 44.0,
        "ratio": 0.932
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 79.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 54.0,
        "ratio": 0.963
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 63.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 96.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 57.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 104.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 89.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 73.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 106.0,
        "ratio": 0.689
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 63.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 72.0,
        "ratio": 0.931
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 106.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 48.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 58.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 70.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 81.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 63.0,
        "ratio": 0.794
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 61.0,
        "ratio": 0.82
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 70.0,
        "ratio": 0.914
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 81.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 92.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 78.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 97.0,
        "ratio": 0.66
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 109.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 31.0,
        "ratio": 0.935
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 68.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 78.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 65.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 101.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 83.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 71.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 106.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 114.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 30.0,
        "opt_cost": 31.0,
        "ratio": 0.968
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 78.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 64.0,
        "ratio": 0.953
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 100.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 49.0,
        "ratio": 0.939
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 86.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 40.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 75.0,
        "ratio": 0.92
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 63.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 72.0,
        "ratio": 0.819
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 107.0,
        "ratio": 0.748
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 68.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 77.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 114.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 86.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 46.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 59.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 70.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 79.0,
        "ratio": 0.658
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 91.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 76.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 86.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 66.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 75.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 56.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 69.0,
        "ratio": 0.71
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 82.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 89.0,
        "ratio": 0.798
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 66.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 37.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 72.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 83.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 42.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 77.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 89.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 76.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 111.0,
        "ratio": 0.703
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 93.0,
        "ratio": 0.72
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 66.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 99.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 111.0,
        "ratio": 0.703
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 51.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 84.0,
        "ratio": 0.798
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 74.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 83.0,
        "ratio": 0.723
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 116.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 44.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 56.0,
        "ratio": 0.911
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 91.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 61.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 83.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 92.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 126.0,
        "ratio": 0.651
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 54.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 64.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 76.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 85.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 67.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 81.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 90.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 101.0,
        "ratio": 0.683
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 98.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 81.0,
        "ratio": 0.802
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 91.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 115.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 51.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 88.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 98.0,
        "ratio": 0.694
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 41.0,
        "ratio": 0.878
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 78.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 59.0,
        "ratio": 0.898
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 49.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 82.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 92.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 51.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 88.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 98.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 70.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 104.0,
        "ratio": 0.769
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 46.0,
        "ratio": 0.913
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 56.0,
        "ratio": 0.786
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 92.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 78.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 61.0,
        "ratio": 0.885
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 96.0,
        "ratio": 0.719
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 69.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 78.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 112.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 74.0,
        "ratio": 0.811
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 82.0,
        "ratio": 0.793
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 118.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 106.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 66.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 46.0,
        "ratio": 0.935
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 66.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 79.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 74.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 86.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 96.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 76.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 75.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 86.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 108.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 71.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 57.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 93.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 47.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 83.0,
        "ratio": 0.807
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 94.0,
        "ratio": 0.702
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 79.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 116.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 99.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 86.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 119.0,
        "ratio": 0.639
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 131.0,
        "ratio": 0.595
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 38.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 71.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 62.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 71.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 105.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 64.0,
        "ratio": 0.734
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 76.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 111.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 83.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 64.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 100.0,
        "ratio": 0.71
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 90.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 98.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 133.0,
        "ratio": 0.617
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 74.0,
        "ratio": 0.77
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 85.0,
        "ratio": 0.706
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 81.0,
        "ratio": 0.79
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 91.0,
        "ratio": 0.703
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 73.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 84.0,
        "ratio": 0.738
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 96.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 104.0,
        "ratio": 0.644
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 118.0,
        "ratio": 0.644
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 101.0,
        "ratio": 0.644
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 111.0,
        "ratio": 0.622
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 67.0,
        "ratio": 0.866
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 78.0,
        "ratio": 0.974
      },
      {
        "greedy_cost": 16.0,
        "opt_cost": 17.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 53.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 64.0,
        "ratio": 0.969
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 48.0,
        "ratio": 0.958
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 84.0,
        "ratio": 0.905
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 66.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 76.0,
        "ratio": 0.947
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 45.0,
        "ratio": 0.911
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 80.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 92.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 76.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 111.0,
        "ratio": 0.721
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 38.0,
        "ratio": 0.947
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 46.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 83.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 69.0,
        "ratio": 0.899
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 53.0,
        "ratio": 0.943
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 86.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 76.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 85.0,
        "ratio": 0.788
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 120.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 49.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 57.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 93.0,
        "ratio": 0.839
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 81.0,
        "ratio": 0.79
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 54.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 67.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 74.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 72.0,
        "ratio": 0.917
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 67.0,
        "ratio": 0.851
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 78.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 87.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 69.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 82.0,
        "ratio": 0.634
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 94.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 102.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 99.0,
        "ratio": 0.788
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 62.0,
        "ratio": 0.887
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 51.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 84.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 95.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 56.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 91.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 91.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 73.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 60.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 95.0,
        "ratio": 0.695
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 107.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 44.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 78.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 54.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 61.0,
        "ratio": 0.869
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 96.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 58.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 104.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 89.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 71.0,
        "ratio": 0.732
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 106.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 90.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 123.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 66.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 75.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 88.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 98.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 80.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 50.0,
        "ratio": 0.94
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 59.0,
        "ratio": 0.949
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 70.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 81.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 67.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 75.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 87.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 98.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 20.0,
        "opt_cost": 21.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 56.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 68.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 55.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 90.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 73.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 61.0,
        "ratio": 0.902
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 96.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 104.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 48.0,
        "ratio": 0.938
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 85.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 95.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 82.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 118.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 58.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 66.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 57.0,
        "ratio": 0.947
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 40.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 74.0,
        "ratio": 0.878
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 63.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 73.0,
        "ratio": 0.863
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 107.0,
        "ratio": 0.748
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 69.0,
        "ratio": 0.652
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 77.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 86.0,
        "ratio": 0.837
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 47.0,
        "ratio": 0.851
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 59.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 71.0,
        "ratio": 0.845
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 79.0,
        "ratio": 0.734
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 92.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 75.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 87.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 84.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 93.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 86.0,
        "ratio": 0.721
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 99.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 106.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 119.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 84.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 37.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 71.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 83.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 41.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 77.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 88.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 75.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 93.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 64.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 99.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 110.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 50.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 85.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 81.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 116.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 61.0,
        "ratio": 0.852
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 73.0,
        "ratio": 0.781
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 108.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 95.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 78.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 112.0,
        "ratio": 0.652
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 100.0,
        "ratio": 0.68
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 110.0,
        "ratio": 0.645
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 143.0,
        "ratio": 0.573
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 44.0,
        "ratio": 0.932
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 53.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 65.0,
        "ratio": 0.923
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 76.0,
        "ratio": 0.842
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 56.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 70.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 79.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 90.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 88.0,
        "ratio": 0.841
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 71.0,
        "ratio": 0.887
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 82.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 93.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 105.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 42.0,
        "ratio": 0.905
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 76.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 89.0,
        "ratio": 0.764
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 58.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 95.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 76.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 66.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 99.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 110.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 68.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 105.0,
        "ratio": 0.657
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 115.0,
        "ratio": 0.643
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 69.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 105.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 45.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 54.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 91.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 79.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 61.0,
        "ratio": 0.82
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 96.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 68.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 77.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 113.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 73.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 83.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 120.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 106.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 68.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 64.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 75.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 84.0,
        "ratio": 0.607
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 96.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 81.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 91.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 104.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 113.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 94.0,
        "ratio": 0.681
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 73.0,
        "ratio": 0.726
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 93.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 107.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 69.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 58.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 91.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 48.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 83.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 95.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 80.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 114.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 99.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 84.0,
        "ratio": 0.726
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 120.0,
        "ratio": 0.617
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 130.0,
        "ratio": 0.6
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 55.0,
        "ratio": 0.764
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 88.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 79.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 88.0,
        "ratio": 0.659
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 122.0,
        "ratio": 0.623
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 81.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 93.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 128.0,
        "ratio": 0.594
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 53.0,
        "ratio": 0.981
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 37.0,
        "ratio": 0.973
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 70.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 61.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 70.0,
        "ratio": 0.986
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 104.0,
        "ratio": 0.788
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 45.0,
        "ratio": 1.044
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 55.0,
        "ratio": 0.945
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 51.0,
        "ratio": 0.98
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 63.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 45.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 57.0,
        "ratio": 0.912
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 68.0,
        "ratio": 0.971
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 77.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 90.0,
        "ratio": 0.822
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 73.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 84.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 80.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 90.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 29.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 65.0,
        "ratio": 0.969
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 76.0,
        "ratio": 0.763
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 60.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 97.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 78.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 36.0,
        "ratio": 0.972
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 69.0,
        "ratio": 0.957
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 79.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 38.0,
        "ratio": 0.921
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 75.0,
        "ratio": 0.76
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 85.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 71.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 107.0,
        "ratio": 0.748
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 33.0,
        "ratio": 0.97
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 43.0,
        "ratio": 0.907
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 79.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 65.0,
        "ratio": 0.954
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 47.0,
        "ratio": 0.979
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 83.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 70.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 81.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 116.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 61.0,
        "ratio": 0.918
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 69.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 105.0,
        "ratio": 0.743
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 93.0,
        "ratio": 0.796
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 53.0,
        "ratio": 0.849
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 66.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 79.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 86.0,
        "ratio": 0.721
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 65.0,
        "ratio": 0.954
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 50.0,
        "ratio": 0.94
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 60.0,
        "ratio": 0.983
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 73.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 83.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 64.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 75.0,
        "ratio": 0.613
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 88.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 95.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 94.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 57.0,
        "ratio": 0.965
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 45.0,
        "ratio": 0.978
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 90.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 50.0,
        "ratio": 0.82
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 85.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 97.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 102.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 85.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 72.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 107.0,
        "ratio": 0.71
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 119.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 57.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 90.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 39.0,
        "ratio": 0.974
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 46.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 81.0,
        "ratio": 0.815
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 43.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 52.0,
        "ratio": 0.904
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 89.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 74.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 56.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 91.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 65.0,
        "ratio": 0.985
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 74.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 108.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 50.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 60.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 72.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 83.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 65.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 62.0,
        "ratio": 0.968
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 72.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 82.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 94.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 80.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 88.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 111.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 16.0,
        "opt_cost": 17.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 52.0,
        "ratio": 0.981
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 64.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 49.0,
        "ratio": 0.898
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 84.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 67.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 57.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 91.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 100.0,
        "ratio": 0.76
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 44.0,
        "ratio": 0.977
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 80.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 91.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 76.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 112.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 54.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 62.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 98.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 70.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 54.0,
        "ratio": 0.815
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 87.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 77.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 86.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 120.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 81.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 90.0,
        "ratio": 0.744
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 126.0,
        "ratio": 0.619
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 36.0,
        "opt_cost": 41.0,
        "ratio": 0.878
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 55.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 65.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 75.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 86.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 69.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 81.0,
        "ratio": 0.802
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 78.0,
        "ratio": 0.846
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 87.0,
        "ratio": 0.805
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 68.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 82.0,
        "ratio": 0.707
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 95.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 102.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 113.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 78.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 51.0,
        "ratio": 0.804
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 95.0,
        "ratio": 0.695
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 54.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 91.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 101.0,
        "ratio": 0.693
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 87.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 123.0,
        "ratio": 0.634
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 105.0,
        "ratio": 0.657
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 50.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 83.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 95.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 35.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 69.0,
        "ratio": 0.913
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 58.0,
        "ratio": 0.966
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 67.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 100.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 47.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 58.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 94.0,
        "ratio": 0.809
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 80.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 62.0,
        "ratio": 0.903
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 97.0,
        "ratio": 0.732
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 86.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 93.0,
        "ratio": 0.763
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 129.0,
        "ratio": 0.636
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 55.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 37.0,
        "opt_cost": 65.0,
        "ratio": 0.569
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 77.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 88.0,
        "ratio": 0.682
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 68.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 82.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 91.0,
        "ratio": 0.769
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 102.0,
        "ratio": 0.676
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 81.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 66.0,
        "ratio": 0.894
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 75.0,
        "ratio": 0.84
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 88.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 98.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 36.0,
        "ratio": 0.972
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 72.0,
        "ratio": 0.819
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 83.0,
        "ratio": 0.819
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 55.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 89.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 73.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 60.0,
        "ratio": 0.883
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 96.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 105.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 65.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 99.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 112.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 81.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 117.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 57.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 66.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 91.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 73.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 108.0,
        "ratio": 0.657
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 63.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 72.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 107.0,
        "ratio": 0.748
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 69.0,
        "ratio": 0.739
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 77.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 112.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 100.0,
        "ratio": 0.7
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 60.0,
        "ratio": 0.85
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 59.0,
        "ratio": 0.881
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 70.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 79.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 92.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 75.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 87.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 98.0,
        "ratio": 0.694
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 106.0,
        "ratio": 0.698
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 89.0,
        "ratio": 0.697
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 85.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 98.0,
        "ratio": 0.735
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 105.0,
        "ratio": 0.657
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 119.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 81.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 70.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 103.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 115.0,
        "ratio": 0.626
      },
      {
        "greedy_cost": 19.0,
        "opt_cost": 19.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 55.0,
        "ratio": 1.0
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 66.0,
        "ratio": 0.939
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 51.0,
        "ratio": 0.961
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 88.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 71.0,
        "ratio": 0.859
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 58.0,
        "ratio": 0.879
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 91.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 103.0,
        "ratio": 0.757
      },
      {
        "greedy_cost": 25.0,
        "opt_cost": 26.0,
        "ratio": 0.962
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 62.0,
        "ratio": 0.919
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 50.0,
        "ratio": 0.96
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 59.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 95.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 55.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 66.0,
        "ratio": 0.924
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 102.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 71.0,
        "ratio": 0.873
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 55.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 88.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 78.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 88.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 121.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 73.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 53.0,
        "ratio": 0.943
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 63.0,
        "ratio": 0.952
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 44.0,
        "ratio": 0.955
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 56.0,
        "ratio": 0.786
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 67.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 76.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 90.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 73.0,
        "ratio": 0.726
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 83.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 79.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 91.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 28.0,
        "opt_cost": 30.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 64.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 77.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 62.0,
        "ratio": 0.903
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 96.0,
        "ratio": 0.792
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 80.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 53.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 87.0,
        "ratio": 0.851
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 96.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 56.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 93.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 88.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 125.0,
        "ratio": 0.64
      },
      {
        "greedy_cost": 30.0,
        "opt_cost": 33.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 41.0,
        "ratio": 0.951
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 78.0,
        "ratio": 0.897
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 64.0,
        "ratio": 0.906
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 48.0,
        "ratio": 0.875
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 81.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 71.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 80.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 115.0,
        "ratio": 0.696
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 60.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 70.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 107.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 94.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 55.0,
        "ratio": 0.891
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 67.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 87.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 83.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 68.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 78.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 91.0,
        "ratio": 0.769
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 101.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 82.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 93.0,
        "ratio": 0.645
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 106.0,
        "ratio": 0.679
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 113.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 84.0,
        "ratio": 0.857
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 48.0,
        "ratio": 0.896
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 35.0,
        "ratio": 0.971
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 70.0,
        "ratio": 0.914
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 80.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 40.0,
        "ratio": 0.95
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 76.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 87.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 57.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 93.0,
        "ratio": 0.839
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 76.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 63.0,
        "ratio": 0.905
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 97.0,
        "ratio": 0.763
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 109.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 47.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 81.0,
        "ratio": 0.827
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 57.0,
        "ratio": 0.842
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 66.0,
        "ratio": 0.636
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 99.0,
        "ratio": 0.687
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 60.0,
        "ratio": 0.9
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 70.0,
        "ratio": 0.786
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 107.0,
        "ratio": 0.71
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 92.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 76.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 109.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 66.0,
        "ratio": 0.909
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 74.0,
        "ratio": 0.878
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 109.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 50.0,
        "ratio": 0.94
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 61.0,
        "ratio": 0.852
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 72.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 84.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 65.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 62.0,
        "ratio": 0.903
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 72.0,
        "ratio": 0.861
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 82.0,
        "ratio": 0.72
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 94.0,
        "ratio": 0.787
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 79.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 88.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 100.0,
        "ratio": 0.68
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 111.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 29.0,
        "opt_cost": 34.0,
        "ratio": 0.853
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 71.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 81.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 67.0,
        "ratio": 0.776
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 104.0,
        "ratio": 0.712
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 85.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 74.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 108.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 117.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 44.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 79.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 91.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 78.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 113.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 53.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 62.0,
        "ratio": 0.839
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 99.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 71.0,
        "ratio": 0.845
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 53.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 88.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 76.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 85.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 119.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 81.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 89.0,
        "ratio": 0.73
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 126.0,
        "ratio": 0.619
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 98.0,
        "ratio": 0.755
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 59.0,
        "ratio": 0.746
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 73.0,
        "ratio": 0.767
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 83.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 93.0,
        "ratio": 0.645
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 104.0,
        "ratio": 0.712
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 89.0,
        "ratio": 0.708
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 99.0,
        "ratio": 0.657
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 68.0,
        "ratio": 0.941
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 78.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 58.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 71.0,
        "ratio": 0.775
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 91.0,
        "ratio": 0.78
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 68.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 32.0,
        "opt_cost": 39.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 75.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 85.0,
        "ratio": 0.682
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 45.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 79.0,
        "ratio": 0.823
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 92.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 78.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 68.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 53.0,
        "ratio": 0.736
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 86.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 76.0,
        "ratio": 0.816
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 85.0,
        "ratio": 0.659
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 118.0,
        "ratio": 0.661
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 46.0,
        "ratio": 0.935
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 57.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 93.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 79.0,
        "ratio": 0.835
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 63.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 96.0,
        "ratio": 0.719
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 85.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 95.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 128.0,
        "ratio": 0.641
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 55.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 67.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 77.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 87.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 70.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 83.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 93.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 103.0,
        "ratio": 0.67
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 99.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 83.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 93.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 105.0,
        "ratio": 0.686
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 116.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 53.0,
        "ratio": 0.83
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 90.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 100.0,
        "ratio": 0.68
      },
      {
        "greedy_cost": 45.0,
        "opt_cost": 53.0,
        "ratio": 0.849
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 90.0,
        "ratio": 0.8
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 71.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 61.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 94.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 105.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 63.0,
        "ratio": 0.73
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 100.0,
        "ratio": 0.63
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 110.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 82.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 116.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 58.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 68.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 104.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 90.0,
        "ratio": 0.733
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 73.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 108.0,
        "ratio": 0.639
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 81.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 90.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 125.0,
        "ratio": 0.64
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 87.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 95.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 130.0,
        "ratio": 0.6
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 118.0,
        "ratio": 0.627
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 78.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 34.0,
        "opt_cost": 35.0,
        "ratio": 0.971
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 48.0,
        "ratio": 0.958
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 55.0,
        "ratio": 0.836
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 69.0,
        "ratio": 0.928
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 53.0,
        "ratio": 0.925
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 63.0,
        "ratio": 0.937
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 75.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 85.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 65.0,
        "ratio": 0.862
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 64.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 75.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 84.0,
        "ratio": 0.774
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 97.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 60.0,
        "ratio": 0.917
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 46.0,
        "ratio": 0.957
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 82.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 92.0,
        "ratio": 0.783
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 37.0,
        "ratio": 0.946
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 72.0,
        "ratio": 0.931
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 83.0,
        "ratio": 0.771
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 68.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 105.0,
        "ratio": 0.743
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 89.0,
        "ratio": 0.775
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 75.0,
        "ratio": 0.84
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 108.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 120.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 26.0,
        "opt_cost": 28.0,
        "ratio": 0.929
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 61.0,
        "ratio": 0.902
      },
      {
        "greedy_cost": 46.0,
        "opt_cost": 51.0,
        "ratio": 0.902
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 60.0,
        "ratio": 0.933
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 93.0,
        "ratio": 0.817
      },
      {
        "greedy_cost": 40.0,
        "opt_cost": 54.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 66.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 101.0,
        "ratio": 0.752
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 48.0,
        "opt_cost": 54.0,
        "ratio": 0.889
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 90.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 79.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 86.0,
        "ratio": 0.802
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 122.0,
        "ratio": 0.672
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 64.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 70.0,
        "ratio": 0.886
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 81.0,
        "ratio": 0.765
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 61.0,
        "ratio": 0.852
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 74.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 94.0,
        "ratio": 0.691
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 108.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 91.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 100.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 80.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 90.0,
        "ratio": 0.844
      },
      {
        "greedy_cost": 24.0,
        "opt_cost": 29.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 65.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 76.0,
        "ratio": 0.868
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 60.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 97.0,
        "ratio": 0.784
      },
      {
        "greedy_cost": 59.0,
        "opt_cost": 78.0,
        "ratio": 0.756
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 53.0,
        "ratio": 0.887
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 88.0,
        "ratio": 0.818
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 97.0,
        "ratio": 0.742
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 57.0,
        "ratio": 0.754
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 92.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 104.0,
        "ratio": 0.712
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 89.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 123.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 50.0,
        "ratio": 0.88
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 58.0,
        "ratio": 0.845
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 95.0,
        "ratio": 0.737
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 81.0,
        "ratio": 0.815
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 65.0,
        "ratio": 0.831
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 98.0,
        "ratio": 0.724
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 88.0,
        "ratio": 0.75
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 97.0,
        "ratio": 0.691
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 132.0,
        "ratio": 0.606
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 50.0,
        "ratio": 0.94
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 59.0,
        "ratio": 0.898
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 96.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 39.0,
        "opt_cost": 45.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 56.0,
        "ratio": 0.839
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 68.0,
        "ratio": 0.882
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 76.0,
        "ratio": 0.789
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 73.0,
        "ratio": 0.877
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 57.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 68.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 80.0,
        "ratio": 0.825
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 91.0,
        "ratio": 0.791
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 72.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 83.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 96.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 103.0,
        "ratio": 0.709
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 101.0,
        "ratio": 0.772
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 65.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 44.0,
        "opt_cost": 54.0,
        "ratio": 0.815
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 88.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 97.0,
        "ratio": 0.68
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 57.0,
        "ratio": 0.86
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 93.0,
        "ratio": 0.72
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 104.0,
        "ratio": 0.692
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 57.0,
        "ratio": 0.895
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 92.0,
        "ratio": 0.848
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 76.0,
        "ratio": 0.829
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 62.0,
        "ratio": 0.855
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 97.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 108.0,
        "ratio": 0.722
      },
      {
        "greedy_cost": 41.0,
        "opt_cost": 47.0,
        "ratio": 0.872
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 82.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 56.0,
        "ratio": 0.893
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 65.0,
        "ratio": 0.754
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 99.0,
        "ratio": 0.727
      },
      {
        "greedy_cost": 50.0,
        "opt_cost": 59.0,
        "ratio": 0.847
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 70.0,
        "ratio": 0.814
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 106.0,
        "ratio": 0.717
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 92.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 75.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 109.0,
        "ratio": 0.651
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 84.0,
        "ratio": 0.81
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 93.0,
        "ratio": 0.699
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 127.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 69.0,
        "ratio": 0.797
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 79.0,
        "ratio": 0.684
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 91.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 102.0,
        "ratio": 0.686
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 83.0,
        "ratio": 0.723
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 63.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 72.0,
        "ratio": 0.833
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 82.0,
        "ratio": 0.768
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 94.0,
        "ratio": 0.745
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 80.0,
        "ratio": 0.713
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 88.0,
        "ratio": 0.761
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 99.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 111.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 31.0,
        "opt_cost": 33.0,
        "ratio": 0.939
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 69.0,
        "ratio": 0.826
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 80.0,
        "ratio": 0.775
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 67.0,
        "ratio": 0.806
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 85.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 73.0,
        "ratio": 0.753
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 108.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 116.0,
        "ratio": 0.655
      },
      {
        "greedy_cost": 49.0,
        "opt_cost": 61.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 98.0,
        "ratio": 0.704
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 108.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 95.0,
        "ratio": 0.705
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 131.0,
        "ratio": 0.611
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 70.0,
        "ratio": 0.743
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 79.0,
        "ratio": 0.734
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 116.0,
        "ratio": 0.638
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 60.0,
        "ratio": 0.867
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 43.0,
        "ratio": 0.884
      },
      {
        "greedy_cost": 67.0,
        "opt_cost": 77.0,
        "ratio": 0.87
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 65.0,
        "ratio": 0.892
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 75.0,
        "ratio": 0.813
      },
      {
        "greedy_cost": 80.0,
        "opt_cost": 108.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 70.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 78.0,
        "ratio": 0.808
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 115.0,
        "ratio": 0.678
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 87.0,
        "ratio": 0.828
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 49.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 62.0,
        "ratio": 0.871
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 73.0,
        "ratio": 0.795
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 82.0,
        "ratio": 0.659
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 94.0,
        "ratio": 0.766
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 76.0,
        "ratio": 0.803
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 89.0,
        "ratio": 0.73
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 85.0,
        "ratio": 0.824
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 95.0,
        "ratio": 0.695
      },
      {
        "greedy_cost": 56.0,
        "opt_cost": 75.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 89.0,
        "ratio": 0.719
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 102.0,
        "ratio": 0.706
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 109.0,
        "ratio": 0.651
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 120.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 85.0,
        "ratio": 0.741
      },
      {
        "greedy_cost": 35.0,
        "opt_cost": 41.0,
        "ratio": 0.854
      },
      {
        "greedy_cost": 62.0,
        "opt_cost": 74.0,
        "ratio": 0.838
      },
      {
        "greedy_cost": 64.0,
        "opt_cost": 84.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 38.0,
        "opt_cost": 44.0,
        "ratio": 0.864
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 80.0,
        "ratio": 0.762
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 91.0,
        "ratio": 0.769
      },
      {
        "greedy_cost": 61.0,
        "opt_cost": 78.0,
        "ratio": 0.782
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 96.0,
        "ratio": 0.677
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 67.0,
        "ratio": 0.821
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 103.0,
        "ratio": 0.718
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 113.0,
        "ratio": 0.69
      },
      {
        "greedy_cost": 43.0,
        "opt_cost": 51.0,
        "ratio": 0.843
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 87.0,
        "ratio": 0.747
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 77.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 84.0,
        "ratio": 0.714
      },
      {
        "greedy_cost": 78.0,
        "opt_cost": 120.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 52.0,
        "opt_cost": 64.0,
        "ratio": 0.812
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 74.0,
        "ratio": 0.743
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 111.0,
        "ratio": 0.685
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 96.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 58.0,
        "opt_cost": 80.0,
        "ratio": 0.725
      },
      {
        "greedy_cost": 73.0,
        "opt_cost": 113.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 103.0,
        "ratio": 0.66
      },
      {
        "greedy_cost": 71.0,
        "opt_cost": 112.0,
        "ratio": 0.634
      },
      {
        "greedy_cost": 82.0,
        "opt_cost": 146.0,
        "ratio": 0.562
      },
      {
        "greedy_cost": 47.0,
        "opt_cost": 56.0,
        "ratio": 0.839
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 65.0,
        "ratio": 0.785
      },
      {
        "greedy_cost": 60.0,
        "opt_cost": 77.0,
        "ratio": 0.779
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 88.0,
        "ratio": 0.773
      },
      {
        "greedy_cost": 54.0,
        "opt_cost": 68.0,
        "ratio": 0.794
      },
      {
        "greedy_cost": 53.0,
        "opt_cost": 82.0,
        "ratio": 0.646
      },
      {
        "greedy_cost": 66.0,
        "opt_cost": 91.0,
        "ratio": 0.725
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 102.0,
        "ratio": 0.676
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 100.0,
        "ratio": 0.74
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 83.0,
        "ratio": 0.759
      },
      {
        "greedy_cost": 65.0,
        "opt_cost": 94.0,
        "ratio": 0.691
      },
      {
        "greedy_cost": 70.0,
        "opt_cost": 105.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 76.0,
        "opt_cost": 117.0,
        "ratio": 0.65
      },
      {
        "greedy_cost": 42.0,
        "opt_cost": 54.0,
        "ratio": 0.778
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 88.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 68.0,
        "opt_cost": 101.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 51.0,
        "opt_cost": 70.0,
        "ratio": 0.729
      },
      {
        "greedy_cost": 72.0,
        "opt_cost": 107.0,
        "ratio": 0.673
      },
      {
        "greedy_cost": 63.0,
        "opt_cost": 88.0,
        "ratio": 0.716
      },
      {
        "greedy_cost": 57.0,
        "opt_cost": 78.0,
        "ratio": 0.731
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 111.0,
        "ratio": 0.667
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 122.0,
        "ratio": 0.607
      },
      {
        "greedy_cost": 55.0,
        "opt_cost": 80.0,
        "ratio": 0.688
      },
      {
        "greedy_cost": 69.0,
        "opt_cost": 117.0,
        "ratio": 0.59
      },
      {
        "greedy_cost": 74.0,
        "opt_cost": 127.0,
        "ratio": 0.583
      }
    ],
    "plot2_actions_vs_type_b": [
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 1,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 1,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 1,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 21.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 1,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 2,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
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
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 33.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 25.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 2,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 25.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 19.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 24.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 1,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 33.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 62.0
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
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 13,
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
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 3,
        "type_b_actions": 0,
        "greedy_cost": 13.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 2,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 20.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 30.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 2,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 1,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 16.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 20.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
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
        "greedy_cost": 68.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 16.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 36.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 1,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 37.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 60.0
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
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 5,
        "type_b_actions": 0,
        "greedy_cost": 19.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 6,
        "type_b_actions": 0,
        "greedy_cost": 25.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 28.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 30.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 1,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 29.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 24,
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
        "type_b_actions": 1,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 32.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 45.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 34.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 9,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 8,
        "type_b_actions": 0,
        "greedy_cost": 26.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 46.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 40.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 48.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 24.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 59.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 2,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 28,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 39.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 44.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 1,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 41.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 50.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 1,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 7,
        "type_b_actions": 0,
        "greedy_cost": 31.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 13,
        "type_b_actions": 0,
        "greedy_cost": 49.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 29,
        "type_b_actions": 1,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 1,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 1,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 67.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 1,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 80.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 56.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 35.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 62.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 64.0
      },
      {
        "total_actions": 10,
        "type_b_actions": 0,
        "greedy_cost": 38.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 1,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 21,
        "type_b_actions": 1,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 61.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 11,
        "type_b_actions": 0,
        "greedy_cost": 43.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 78.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 52.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 1,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 58.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 73.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 24,
        "type_b_actions": 1,
        "greedy_cost": 71.0
      },
      {
        "total_actions": 30,
        "type_b_actions": 0,
        "greedy_cost": 82.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 1,
        "greedy_cost": 47.0
      },
      {
        "total_actions": 15,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 17,
        "type_b_actions": 1,
        "greedy_cost": 60.0
      },
      {
        "total_actions": 20,
        "type_b_actions": 0,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 54.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 53.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 66.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 1,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 19,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 22,
        "type_b_actions": 0,
        "greedy_cost": 65.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 70.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 0,
        "greedy_cost": 76.0
      },
      {
        "total_actions": 12,
        "type_b_actions": 0,
        "greedy_cost": 42.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 1,
        "greedy_cost": 68.0
      },
      {
        "total_actions": 14,
        "type_b_actions": 0,
        "greedy_cost": 51.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 72.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 63.0
      },
      {
        "total_actions": 18,
        "type_b_actions": 0,
        "greedy_cost": 57.0
      },
      {
        "total_actions": 23,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 26,
        "type_b_actions": 0,
        "greedy_cost": 74.0
      },
      {
        "total_actions": 16,
        "type_b_actions": 0,
        "greedy_cost": 55.0
      },
      {
        "total_actions": 25,
        "type_b_actions": 0,
        "greedy_cost": 69.0
      },
      {
        "total_actions": 27,
        "type_b_actions": 1,
        "greedy_cost": 74.0
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
          "algorithm": "Side Gates Approach (Optimum - Cost 45)",
          "total_cost": 45.0,
          "path_length": 9,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 3.0,
              "cum_cost": 5.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
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
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
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
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
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
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 7.0,
              "cum_cost": 22.0,
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
                  0.5,
                  0.0
                ],
                [
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ]
              ]
            },
            {
              "step": 7,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 9.0,
              "cum_cost": 31.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.5,
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
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 40.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.0,
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
                ]
              ]
            }
          ]
        },
        "alternative_46": {
          "algorithm": "Other Alternative (Cost 46)",
          "total_cost": 46.0,
          "path_length": 10,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 3.0,
              "cum_cost": 5.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.0
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
                  1.0,
                  0.0
                ]
              ]
            },
            {
              "step": 4,
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
                  1.0,
                  1.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
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
                  1.0,
                  0.0
                ],
                [
                  0.5,
                  0.0
                ],
                [
                  0.5,
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
              "cum_cost": 23.0,
              "target": {
                "row": 3,
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
              "cost": 9.0,
              "cum_cost": 32.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 41.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 10,
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
        "greedy_47": {
          "algorithm": "GreedyStar (Cost 47)",
          "total_cost": 47.0,
          "path_length": 7,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 3,
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
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 5.0,
              "cum_cost": 10.0,
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
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 19.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 4,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 24.0,
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
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 9.0,
              "cum_cost": 33.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.0,
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
                  0.0,
                  0.0
                ]
              ]
            },
            {
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 9.0,
              "cum_cost": 42.0,
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
              "cum_cost": 47.0,
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
        "optimal_ucs_50": {
          "algorithm": "UCS",
          "total_cost": 50.0,
          "path_length": 10,
          "nodes_expanded": 2068,
          "nodes_generated": 2377,
          "execution_time_ms": 212.667,
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
          "execution_time_ms": 5.075,
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
          "execution_time_ms": 85.63,
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
          "execution_time_ms": 2.062,
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
              "cost": 7.0,
              "cum_cost": 30.0,
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
                  0.5
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
              "step": 9,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=1)",
              "cost": 1.0,
              "cum_cost": 31.0,
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
                  1.0,
                  0.5
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
              "step": 10,
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 32.0,
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
                  0.5
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
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 1.0,
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
                  1.0,
                  0.5
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
              "cost": 5.0,
              "cum_cost": 38.0,
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
                  0.5
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
              "step": 13,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 3.0,
              "cum_cost": 41.0,
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
                  0.0
                ]
              ]
            },
            {
              "step": 14,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
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
              "step": 17,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 1.0,
              "cum_cost": 57.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
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
              "step": 18,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 7.0,
              "cum_cost": 64.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.5
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
              "step": 19,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
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
          "execution_time_ms": 125.978,
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
          "execution_time_ms": 424.19,
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
        "greedystar": {
          "algorithm": "GreedyStar",
          "total_cost": 43.0,
          "path_length": 7,
          "nodes_expanded": 7,
          "nodes_generated": 8,
          "execution_time_ms": 0.182,
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
              "description": "Drop(r=2->1, c=0)",
              "cost": 9.0,
              "cum_cost": 9.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 18.0,
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
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 23.0,
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
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 28.0,
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
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 33.0,
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
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 38.0,
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
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 43.0,
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
          "execution_time_ms": 3.304,
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
          "execution_time_ms": 0.932,
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
        "greedy": {
          "algorithm": "GreedyStar",
          "total_cost": 43.0,
          "path_length": 7,
          "nodes_expanded": 7,
          "nodes_generated": 8,
          "execution_time_ms": 0.182,
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
              "description": "Drop(r=2->1, c=0)",
              "cost": 9.0,
              "cum_cost": 9.0,
              "target": {
                "row": 2,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 18.0,
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
              "step": 3,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=0)",
              "cost": 5.0,
              "cum_cost": 23.0,
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
              "step": 4,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 5.0,
              "cum_cost": 28.0,
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
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 33.0,
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
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=1)",
              "cost": 5.0,
              "cum_cost": 38.0,
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
              "step": 7,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 43.0,
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
          "execution_time_ms": 153.502,
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
          "execution_time_ms": 2.075,
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
              "cost": 9.0,
              "cum_cost": 32.0,
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
              "step": 9,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 1.0,
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
              "cost": 9.0,
              "cum_cost": 42.0,
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
              "step": 11,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 1.0,
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
              "description": "Drop(r=1->0, c=1)",
              "cost": 1.0,
              "cum_cost": 50.0,
              "target": {
                "row": 1,
                "col": 1
              },
              "delta_s": 0.5,
              "state": [
                [
                  0.5,
                  0.5
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
              "step": 15,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 7.0,
              "cum_cost": 57.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
                [
                  1.0,
                  0.5
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
              "step": 16,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
              "cum_cost": 60.0,
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
              "action_type": "SIDE_GATE",
              "description": "SideGate(r=0)",
              "cost": 1.0,
              "cum_cost": 61.0,
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
              "description": "Drop(r=1->0, c=1)",
              "cost": 1.0,
              "cum_cost": 62.0,
              "target": {
                "row": 1,
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
              "cum_cost": 65.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.5,
              "state": [
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
              "step": 20,
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 3.0,
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
              "cum_cost": 72.0,
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
              "cum_cost": 75.0,
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
          "execution_time_ms": 175.444,
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
          "execution_time_ms": 1519.247,
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
        "greedystar": {
          "algorithm": "GreedyStar",
          "total_cost": 46.0,
          "path_length": 8,
          "nodes_expanded": 8,
          "nodes_generated": 9,
          "execution_time_ms": 0.19,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 7.0,
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
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 21.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 4,
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
                  1.0
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
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 29.0,
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
                  1.0
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
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.0,
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
              "description": "Drop(r=1->0, c=1)",
              "cost": 7.0,
              "cum_cost": 41.0,
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
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 46.0,
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
        "astar": {
          "algorithm": "A*",
          "total_cost": 52.0,
          "path_length": 12,
          "nodes_expanded": 384,
          "nodes_generated": 688,
          "execution_time_ms": 39.377,
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
          "execution_time_ms": 3431.131,
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
        "greedy": {
          "algorithm": "GreedyStar",
          "total_cost": 46.0,
          "path_length": 8,
          "nodes_expanded": 8,
          "nodes_generated": 9,
          "execution_time_ms": 0.19,
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
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=0)",
              "cost": 5.0,
              "cum_cost": 5.0,
              "target": {
                "row": 3,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 2,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=0)",
              "cost": 7.0,
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
              "step": 3,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=1->0, c=0)",
              "cost": 9.0,
              "cum_cost": 21.0,
              "target": {
                "row": 1,
                "col": 0
              },
              "delta_s": 0.0,
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
              "step": 4,
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
                  1.0
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
              "step": 5,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=3->2, c=1)",
              "cost": 3.0,
              "cum_cost": 29.0,
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
                  1.0
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
              "step": 6,
              "action_type": "TOP_DOWN",
              "description": "Drop(r=2->1, c=1)",
              "cost": 5.0,
              "cum_cost": 34.0,
              "target": {
                "row": 2,
                "col": 1
              },
              "delta_s": 0.0,
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
              "description": "Drop(r=1->0, c=1)",
              "cost": 7.0,
              "cum_cost": 41.0,
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
              "action_type": "COLLECTOR_FLUSH",
              "description": "Flush(r=0, c=1)",
              "cost": 5.0,
              "cum_cost": 46.0,
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
