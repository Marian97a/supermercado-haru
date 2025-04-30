import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("---Supermercado Haru---");

        System.out.println("Digite o nome do cliente: ");
        String nomeCliente = scanner.nextLine();

        System.out.println("Tem volumes para os refrigeradores? (Sim/Não)");
        String resposta = scanner.nextLine().trim().toLowerCase();

        boolean frios = resposta.equals("sim");
    }
}