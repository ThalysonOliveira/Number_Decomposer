import { NumberDecomposerService } from '../../data/services/number-decomposer-service';
import { NumberDecomposerController } from '../../presentation/controllers/number-decomposer-controller';

const makeNumberDecomposer = (): NumberDecomposerController => {
    const numberDecomposerService = new NumberDecomposerService();
    return new NumberDecomposerController(numberDecomposerService);
};

export { makeNumberDecomposer };
