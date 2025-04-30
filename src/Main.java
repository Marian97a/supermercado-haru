import java.text.SimpleDateFormat;
import java.util.Date;
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

        int quantidadeVolumes = 0;

        if (frios) {
            System.out.println("Digite quantidade de volume no(s) refrigeradores");
            quantidadeVolumes = scanner.nextInt();
            scanner.nextLine();
        } else {
            System.out.println("NÃO HÁ VOLUMES! ");
        }

        System.out.println("Digite o endereço do cliente: ");
        String enderecoCliente = scanner.nextLine();

        Date dataHoraAtual = new Date();
        SimpleDateFormat formato = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss");
        String dataHoraFormatada = formato.format(dataHoraAtual);
        System.out.println("Data e hora: " + dataHoraFormatada);

        
    }
}