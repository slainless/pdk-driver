import * as s from "superstruct";

interface GetPenduduk {
  setValue: Array<{
    field: string;
    value: string;
  }>;
}

export const GetPendudukScheme: s.Describe<GetPenduduk> = s.type({
  setValue: s.array(
    s.object({
      field: s.string(),
      value: s.string(),
    })
  ),
});
