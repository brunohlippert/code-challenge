import { render, screen } from '@testing-library/react';
import { act } from "react-dom/test-utils";
import App from './App';

describe('<App />', () => {
    it('renders without errors', () => {
        render(<App />)
    });

    it("shows beer info on screen", async () => {
        const fakeTemperature = [
            {
                id: '1',
                name: 'Pilsner',
                minimumTemperature: 4,
                maximumTemperature: 6,
                temperature: 5
            }
        ];

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeTemperature)
            })
        );

        await act(async () => {
            render(<App />);
        });

        expect(screen.getByTestId('name')).toHaveTextContent(fakeTemperature[0].name);
        expect(screen.getByTestId('temperature')).toHaveTextContent(fakeTemperature[0].temperature);

        global.fetch.mockRestore();
    });
    describe('getTemperatureStatus', () => {
        it("shows 'all good' for beer on correct temperature", async () => {
            const fakeTemperature = [
                {
                    id: '1',
                    name: 'Pilsner',
                    minimumTemperature: 4,
                    maximumTemperature: 6,
                    temperature: 5
                }
            ];

            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fakeTemperature)
                })
            );

            await act(async () => {
                render(<App />);
            });

            expect(screen.getByTestId('status')).toHaveTextContent("all good");

            global.fetch.mockRestore();
        });

        it("shows 'too low' for beer with lower temperature", async () => {
            const fakeTemperature = [
                {
                    id: '1',
                    name: 'Pilsner',
                    minimumTemperature: 4,
                    maximumTemperature: 6,
                    temperature: -4
                }
            ];

            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fakeTemperature)
                })
            );

            await act(async () => {
                render(<App />);
            });

            expect(screen.getByTestId('status')).toHaveTextContent("too low");

            global.fetch.mockRestore();
        });

        it("shows 'too high' for beer with bigger temperature", async () => {
            const fakeTemperature = [
                {
                    id: '1',
                    name: 'Pilsner',
                    minimumTemperature: 4,
                    maximumTemperature: 6,
                    temperature: 22
                }
            ];

            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fakeTemperature)
                })
            );

            await act(async () => {
                render(<App />);
            });

            expect(screen.getByTestId('status')).toHaveTextContent("too high");

            global.fetch.mockRestore();
        });

        it("shows 'NO DATA' for beer in case API can't find temperature", async () => {
            const fakeTemperature = [
                {
                    id: '1',
                    name: 'Pilsner',
                    minimumTemperature: 4,
                    maximumTemperature: 6,
                }
            ];

            jest.spyOn(global, "fetch").mockImplementation(() =>
                Promise.resolve({
                    json: () => Promise.resolve(fakeTemperature)
                })
            );

            await act(async () => {
                render(<App />);
            });

            expect(screen.getByTestId('status')).toHaveTextContent("NO DATA");

            global.fetch.mockRestore();
        });
    });


});