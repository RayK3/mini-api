import { Request, Response } from 'express';

export const getCountry = (req: Request, res: Response) => {
    res.status(200);
    res.json({
        id: '6aa60d58-a9b1-41fb-b5fa-ccbe1873431c',
        country: 'Canada',
        abbreviation: 'CA',
        population: 37742154,
    });
}