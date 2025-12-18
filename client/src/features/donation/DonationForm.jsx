

export default function DonationForm() {
  return (
    <>
      <h1>Formulario de Donación</h1>
      <form>
        <label>
          Monto:
          <input type="number" name="amount" />
        </label>
        <br />
        <label>
          Método de Pago:
          <select name="paymentMethod">
            <option value="creditCard">Tarjeta de Crédito</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Transferencia Bancaria</option>
          </select>
        </label>
        <br />
        <button type="submit">Donar</button>
      </form>
    </>
  )
}
