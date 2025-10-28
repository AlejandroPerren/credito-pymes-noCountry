export type FetchMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface FetchOptions<TBody = unknown> {
  method?: FetchMethod; // Méthods HTTP (por defecto GET)
  body?: TBody;
  token?: string | null; // Token JWT (if endpoint require Auth)
}

// Generic function reutilizable
export async function apiFetch<TData = unknown, TBody = unknown>(
  endpoint: string,
  options: FetchOptions<TBody> = {}
): Promise<{ ok: boolean; data: TData | null; error?: string }> {
  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api/v1";
  const url = `${baseUrl}${endpoint}`;

  const token = localStorage.getItem("access_token");

  console.log("🔗 Fetching:", url, options);

  try {
    const res = await fetch(url, {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      ...(options.body ? { body: JSON.stringify(options.body) } : {}),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
      return {
        ok: false,
        data: null,
        error: json?.error || res.statusText,
      };
    }

    return { ok: true, data: json as TData };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Fallo de red";
    return { ok: false, data: null, error: message };
  }
}

//Example Whit Get And Post

// export const getAllUsers = async () => {  //la fucnion retorna : ok(bolean), data(si se tipa toma el dato que se manda), error?(si llega un error)
//   return apiFetch<Users[]>("http:localhost/3000/api/users"); //FetchApi permite tipar el tipo de datos de data, sino se tipa queda unknown
// };//si es get no se declara method

// export const createUser = async (body: createUserBody) => {
//   return apiFetch<User>("http:localhost/3000/api/users", {
//     method: "POST", //Al ser metodo POST se declara
//     body, // al requerir un cuerpo se manda de esta manera
//   });
// };
