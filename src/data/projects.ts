import type { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'css-phy-tx',
    name: 'IEEE 802.15.4 CSS PHY Transmitter',
    category: 'ASIC',
    categoryLabel: 'RTL Design & Verification',
    description:
      'Designed and implemented a modular synthesizable Verilog RTL transmitter integrating payload framing, PHR/serialization, zero padding, I/Q demultiplexing, symbol mapping, codeword buffering, PPDU formation, QPSK, DQPSK, and chirp modulation. Developed FSM-based control and integrated the complete transmission datapath.',
    keyHighlights: [
      'Modular synthesizable Verilog RTL transmission datapath',
      'FSM-based control logic, QPSK / DQPSK / Chirp modulation',
      'QuestaSim vs MATLAB golden reference: 0 mismatches',
      'ASIC physical design flow executed with Synopsys SAED 90nm libraries'
    ],
    techTags: ['Verilog HDL', 'ASIC Flow', 'SAED 90nm', 'QuestaSim', 'MATLAB', 'QPSK/Chirp', 'FSM'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'css-phy'
  },
  {
    id: 'riscv-32bit-processor',
    name: '32-bit Single-Cycle RISC-V Processor',
    category: 'Processor',
    categoryLabel: 'Processor Design / RTL',
    description:
      'Designed and verified a 32-bit Single-Cycle RISC-V processor using Verilog HDL. Implemented custom Datapath, Control Unit, ALU, Register File, Instruction Memory, Data Memory, Immediate Extension, and PC Control Logic.',
    keyHighlights: [
      'Full RV32I base instructions: Arithmetic, Logical, Branch, Jump, Load, Store',
      'Modular microarchitecture with dedicated ALU, Imm Gen & Control Matrix',
      'Verified via simulation using multiple RISC-V assembly programs',
      'Hex memory initialization files validation'
    ],
    techTags: ['Verilog HDL', 'RISC-V', 'Processor Architecture', 'Datapath', 'Control Unit', 'RTL Verification'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'riscv'
  },
  {
    id: 'spi-slave-ram',
    name: 'SPI Slave + Single-Port RAM',
    category: 'RTL',
    categoryLabel: 'RTL Design',
    description:
      'Designed an SPI slave wrapper interfaced with single-port synchronous RAM. Synthesized, generated the gate-level netlist, and thoroughly verified protocol handshake and memory read/write functionality.',
    keyHighlights: [
      'Four-wire SPI protocol serial interface (SCLK, MOSI, MISO, SS_n)',
      'Synchronous Single-Port RAM read/write access protocol',
      'Gate-level netlist generation and functional sign-off'
    ],
    techTags: ['Verilog HDL', 'SPI Protocol', 'Synchronous RAM', 'Netlist Synthesis', 'QuestaSim'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'spi'
  },
  {
    id: 'sync-fifo-uvm',
    name: 'Synchronous FIFO with SVA & UVM',
    category: 'Verification',
    categoryLabel: 'Digital Verification',
    description:
      'Designed a synchronous FIFO buffer and constructed a rigorous verification environment using SystemVerilog Assertions (SVA) and a comprehensive UVM-based testbench architecture.',
    keyHighlights: [
      'Modular FIFO memory array with synchronized read/write pointers',
      'SystemVerilog Assertions (SVA) for full/empty boundary checks',
      'UVM verification environment: TLM, sequences, monitor, scoreboard'
    ],
    techTags: ['SystemVerilog', 'UVM', 'SVA', 'FIFO', 'Scoreboard', 'Functional Coverage'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'sync-fifo'
  },
  {
    id: 'async-fifo-cdc',
    name: 'Parameterized Asynchronous FIFO',
    category: 'CDC',
    categoryLabel: 'CDC / RTL Verification',
    description:
      'Designed and verified a parameterized Asynchronous FIFO in Verilog HDL operating across independent read and write clock domains. Engineered Gray-code pointer synchronization, dual-flop CDC synchronizers, safe full/empty flag generation, and FIFO memory control.',
    keyHighlights: [
      'Dual-flop Clock Domain Crossing (CDC) synchronizers',
      'Gray-code conversion preventing multi-bit metastability glitches',
      'Comprehensive testbench covering simultaneous R/W, overflow, underflow, and clock skew'
    ],
    techTags: ['Verilog HDL', 'CDC', 'Gray Code', 'Dual-Flop Sync', 'Metastability', 'Testbench'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'async-fifo'
  },
  {
    id: 'dsp48a1-spartan6',
    name: 'DSP48A1 Spartan-6 FPGA Slice',
    category: 'FPGA',
    categoryLabel: 'FPGA / Digital Design',
    description:
      'Designed DSP48A1, a dedicated hardware computational slice of the Xilinx Spartan-6 FPGA architecture. Implemented high-speed 18x18 multiplier, pre-adder, 48-bit accumulator, and pipelined register stages, verifying functionality with a targeted testbench.',
    keyHighlights: [
      'Faithful RTL reproduction of the Spartan-6 DSP48A1 slice architecture',
      'Pipelined multiplier, pre-adder, and pattern detector logic',
      'Comprehensive functional testbench verification'
    ],
    techTags: ['Verilog HDL', 'FPGA Architecture', 'Xilinx Spartan-6', 'DSP Slice', 'Vivado'],
    githubUrl: 'https://github.com/Mahmoud-Abdelnasser111',
    diagramType: 'dsp48a1'
  }
];
