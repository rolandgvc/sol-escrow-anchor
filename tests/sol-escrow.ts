import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolEscrow } from "../target/types/sol_escrow";

describe("sol-escrow", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolEscrow as Program<SolEscrow>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
