package com.cameleon.chameleon.data.repository;

import com.cameleon.chameleon.data.entity.Feature;
import org.springframework.data.repository.CrudRepository;

public interface FeatureRepository extends CrudRepository<Feature, Long> {}